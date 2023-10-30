const router = require("express").Router();
const Orders = require("../model/Orders");
const { reactAuth } = require("../middleware/reactAuth");

router.post(
  "/order",
  /*reactAuth,*/ async (req, res) => {
    const { order } = req.body;
    const options = { ordered: true };

    if (order.length !== 0) {
      try {
        const result = await Orders.insertMany(order, options).then(() => {
          res.json("all is well");
          console.log("data added successully");
        });
      } catch (err) {
        res.json(err.message);
      }
    } else {
      res.json("input error");
    }
  }
);

module.exports = router;
