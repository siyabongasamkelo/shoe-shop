const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Orders = require("../model/Orders");

router.get(
  "/orders",
  /*reactAuth,*/ async (req, res) => {
    const orders = await Orders.find();
    res.send(orders);
  }
);

module.exports = router;
