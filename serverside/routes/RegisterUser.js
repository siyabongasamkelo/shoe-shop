const router = require("express").Router();
const Users = require("../model/Users");
const cloudinary = require("../utils/cloudinary");

router.post("/user", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const username = req.body.username;
  const file = req.files;

  function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false;
  }

  const theUser = await Users.find({ email: email });

  if (isEmpty(theUser) === true) {
    const results = await cloudinary.uploader
      .upload(file.image.tempFilePath)
      .catch((err) => {
        res.json("an error occured while uploading your photo");
      });
    let image = results.secure_url;

    const newUser = new Users({
      name: name,
      password: password,
      email: email,
      username: username,
      image: image,
    });

    await Users.create(newUser)
      .then(() => {
        res.json("user successfully registered");
      })
      .catch((err) => {
        res.json("please make sure no field is empty");
      });
  } else {
    res.json("email already exist");
  }
});

module.exports = router;
