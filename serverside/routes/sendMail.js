const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");
const Users = require("../model/Users");
const Reviews = require("../model/Reviews");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "just testing...";

router.post(
  "/password",
  /*reactAuth,*/ async (req, res) => {
    const { email } = req.body;
    const user = await Users.find({ email: email });

    if (!user) {
      res.json("User does not exits");
      return;
    }

    const secret = JWT_SECRET + user.password;
    const payload = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "15m" });

    const link = `http://localhost:3000/reset/${user[0]._id}/${token}`;
    res.json("Reset link was sent to your email...");

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "siyabongasamkelociam@outlook.com",
        pass: "Bafana2001",
      },
    });

    const options = {
      from: "siyabongasamkelociam@outlook.com",
      to: `${email}`,
      subject: "DingDomZone Password reset",
      text: `To reset your password please click this link ${link}`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(info.response);
      //   res.json(info.response);
      res.json(link);
    });

    // res.json(link);
  }
);

module.exports = router;
