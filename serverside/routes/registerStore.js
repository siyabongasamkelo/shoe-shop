const router = require("express").Router();
const mongoose = require("mongoose");
const Store = require("../model/Store");
const Users = require("../model/Users");
const cloudinary = require("../utils/cloudinary");

router.post("/store", async (req, res) => {
  const { username, password, email, description } = req.body;
  const file = req.files;
  let isValid = true;

  function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false;
  }

  const results = await cloudinary.uploader
    .upload(file.image.tempFilePath)
    .catch((err) => {
      res.json(err.message);
    });

  const theStore = await Store.find({ email: email });

  const theUser = await Users.find({ email: email });

  let image = results.secure_url;

  // if (isEmpty(theUser) === true || isEmpty(theStore) === true) {

  if (isEmpty(theStore) === false) {
    isValid = false;
  }
  if (isEmpty(theUser) === false) {
    isValid = false;
  }

  if (isValid === true) {
    const newStore = new Store({
      storename: username,
      password: password,
      email: email,
      image: image,
      description: description,
    });
    await Store.create(newStore)
      .then(() => {
        res.json("Store successfully registered");
      })
      .catch((err) => {
        res.json("please make sure that there are no empty fields");
      });
    // res.json("testing");
  } else {
    res.json("email already exists");
  }
});

module.exports = router;
