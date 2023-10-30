const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");
const Users = require("../model/Users");
const Reviews = require("../model/Reviews");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "just testing...";

router.post("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { email, password, conPassword } = req.body;
  const user = await Users.find({ email: email });

  //   if (id !== user[0]._id) {
  //     res.json("Invalid id...");
  //     return;
  //   }

  const secret = JWT_SECRET + user.password;

  try {
    const payload = jwt.verify(token, secret);
    

    const updatePassword = await Users.findOneAndUpdate({ _id: id }, password, {
      new: true,
    })
      .then(() => {
        res.json("Your password was updated");
      })
      .catch((err) => {
        res.json(err.message);
      });
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }

  //   res.json({ id: id, fromdb: user[0]._id });
});

module.exports = router;
