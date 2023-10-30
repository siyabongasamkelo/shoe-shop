const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");

router.get(
  "/items",
  /*reactAuth,*/ async (req, res) => {
    const theProducts = await Items.find();
    res.send(theProducts);

    // const item = await Items.aggregate([
    //   {
    //     $group: {
    //       _id: null,
    //       maxQty: { $min: "$price" },
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //     },
    //   },
    // ]);

    // res.json(item);
  }
);

module.exports = router;
