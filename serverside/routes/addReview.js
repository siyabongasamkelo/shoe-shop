const router = require("express").Router();
const Reviews = require("../model/Reviews");
const { reactAuth } = require("../middleware/reactAuth");

router.post(
  "/review",
  /*reactAuth,*/ async (req, res) => {
    const { writerId, productId, review, rating, storeId } = req.body;

    let alliswell = true;
    const Arrays = [writerId, productId, review, rating, storeId];

    function isEmpty(val) {
      return val === undefined || val == null || val.length <= 0 ? true : false;
    }

    for (let i = 0; i < Arrays.length; i++) {
      if (isEmpty(Arrays[i])) {
        alliswell = false;
      }
    }

    if (alliswell) {
      try {
        const newReview = new Reviews({
          writerId: writerId,
          productId: productId,
          storeID: storeId,
          review: review,
          rating: rating,
        });
        await Reviews.create(newReview).then(() => {
          res.json("review added");
        });
      } catch (err) {
        console.log(err);
        res.json({ messgae: "error occured while adding your review" });
        alliswell = false;
      }
    } else {
      res.json("input error");
    }
  }
);

module.exports = router;
