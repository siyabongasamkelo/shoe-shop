const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");
const Reviews = require("../model/Reviews");

router.get(
  "/item/:id",
  /*reactAuth,*/ async (req, res) => {
    const id = req.params.id;

    try {
      const item = await Items.find({ _id: id });
      const reviews = await Reviews.find({ productId: item[0]._id });
      const recommended = await Items.find({ category: item[0].category });

      res.json({ item, recommended, reviews });
    } catch (err) {
      res.json(err);
      console.log(err);
    }
  }
);

module.exports = router;
