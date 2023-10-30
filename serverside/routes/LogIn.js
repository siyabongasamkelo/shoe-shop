const router = require("express").Router();
const Users = require("../model/Users");
const Store = require("../model/Store");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAage = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAage,
  });
};

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

router.post("/user", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const theUser = await Users.find({ email: email });
  const theStore = await Store.find({ email: email });
  if (isEmpty(theUser) !== true) {
    console.log("on the user part");
    const auth = await bcrypt.compare(password, theUser[0].password);
    if (auth) {
      const token = createToken(theUser[0].id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAage * 1000 });
      req.session = theUser;

      res.send({ auth: true, token: token, result: theUser, auther: "user" });
    } else {
      res.json("incorrect email/password");
    }
  }

  if (isEmpty(theStore) !== true) {
    console.log("on the store part");
    const auth = await bcrypt.compare(password, theStore[0].password);
    if (auth) {
      const token = createToken(theStore[0].id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAage * 1000 });
      req.session = theStore;

      res.send({ auth: true, token: token, result: theStore, auther: "store" });
    } else {
      res.json("incorrect email/password");
    }
  }
});

module.exports = router;
