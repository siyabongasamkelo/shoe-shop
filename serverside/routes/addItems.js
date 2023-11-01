const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const Items = require("../model/Items");

const { reactAuth } = require("../middleware/reactAuth");

router.post(
  "/item",
  /*reactAuth,*/ async (req, res) => {
    const {
      name,
      price,
      description,
      quantity,
      info,
      cartegory,
      brand,
      gender,
      date,
      store,
      color,
      ratings,
    } = req.body;

    const file = req.files;

    function isEmpty(val) {
      return val === undefined || val == null || val.length <= 0 ? true : false;
    }
    let isValid = true;

    const Arrays = [
      name,
      price,
      description,
      quantity,
      info,
      cartegory,
      brand,
      gender,
      date,
      store,
      color,
      ratings,
    ];

    for (let i = 0; i < Arrays.length; i++) {
      if (isEmpty(Arrays[i])) {
        isValid = false;
      }
    }

    if (isValid) {
      const results = await cloudinary.uploader
        .upload(file.image.tempFilePath)
        .then((data) => {
          const image = data.secure_url;

          const newItem = new Items({
            description: description,
            category: cartegory,
            price: price,
            image: image,
            quantity: quantity,
            info: info,
            name: name,
            brand: brand,
            gender: gender,
            date: date,
            color: color,
            store: store,
            ratings: ratings,
          });
          Items.create(newItem)
            .then(() => {
              res.json("Item added successfully");
            })
            .catch((err) => {
              res.json(err.message);
            });
        })
        .catch((err) => {
          res.json(err.message);
        });
    } else {
      res.json("input error");
    }
  }
);

module.exports = router;
