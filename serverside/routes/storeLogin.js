const router = require("express").Router();
const Store = require("../model/Store");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAage = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAage,
  });
};

router.post("/store", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const isEmpty = (eArray = [, password, email]) => {
    let emptyCheck = { empty: false, name: "" };
    for (i = 0; i < eArray.length; i++) {
      if (eArray[i].length === 0) {
        emptyCheck.empty = true;
        emptyCheck.name = eArray[i];
      }
    }
    return emptyCheck;
  };

  if (isEmpty.empty) {
    res.json("input error");
  } else {
    const theStore = await Store.find({ email: email });
    if (theUser) {
      const auth = await bcrypt.compare(password, theUser[0].password);
      if (auth) {
        const token = createToken(theStore[0].id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAage * 1000 });
        req.session = theStore;

        res.send({ auth: true, token: token, result: theStore });
      } else {
        res.json("incorrect email/password");
      }
    } else {
      res.json("use does not exist");
    }
  }
});

module.exports = router;
