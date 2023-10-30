const router = require("express").Router();
const Reviews = require("../model/Reviews");
const { reactAuth } = require("../middleware/reactAuth");

router.post(
  "/review",
  /*reactAuth,*/ async (req, res) => {
    const { writerId, productId, review, rating } = req.body;

    // const writerId = "j23762gyugyg2y"

    const storeID = "sd77g7g7gdsg";

    // const { writerId, review, rating } = req.body;

    let alliswell = true;
    const isEmpty = (
      eArray = [writerId, productId, storeID, review, rating]
    ) => {
      let emptyCheck = { isEmpty: false, emptyfield: "" };
      for (i = 0; i < eArray.length; i++) {
        if (eArray[i].length === 0) {
          emptyCheck.isEmpty = true;
          emptyCheck.emptyfield = eArray[i];
        }
      }
      return emptyCheck;
    };

    try {
      if (isEmpty.isEmpty !== true) {
        try {
          const newReview = new Reviews({
            writerId: writerId,
            productId: productId,
            storeID: storeID,
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
        console.log(err);
        res.json({ messgae: "input error" });
        alliswell = false;
      }
    } catch (err) {
      console.log(err);
      res.json({
        error: err.message,
        message: "something went wrong while adding your review",
      });
      alliswell = false;
    }
  }
);

module.exports = router;
