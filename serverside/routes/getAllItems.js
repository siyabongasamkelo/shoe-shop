const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");

router.get(
  "/items",
  /*reactAuth,*/ async (req, res) => {
    const theProducts = await Items.find();
    res.send(theProducts);
  }
);

module.exports = router;
