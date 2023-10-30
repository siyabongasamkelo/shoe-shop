const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Reviews = require("../model/Reviews");

router.post(
  "/reviews",
  /*reactAuth,*/ async (req, res) => {
    const { productId } = req.body;
    const theReview = await Review.find({ id: productId });
    res.send(theReview);
  }
);

module.exports = router;
