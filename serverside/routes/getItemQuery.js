const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");

router.post(
  "/itemquery",
  /*reactAuth,*/ async (req, res) => {
    const { gender, size, cart, sort } = req.body;
    let theProducts;

    if (gender !== "all") {
      theProducts = await Items.find({ gender: gender });
    }

    if (size !== "all") {
      theProducts = await Items.find({ size: size });
    }

    if (cart !== "all") {
      theProducts = await Items.find({ category: cart });
    }

    if (cart !== "all" && gender !== "all") {
      theProducts = await Items.find({ category: cart, gender: gender });
    }

    if (cart !== "all" && size !== "all") {
      theProducts = await Items.find({ category: cart, size: size });
    }

    if (size !== "all" && gender !== "all") {
      theProducts = await Items.find({ category: cart, gender: gender });
    }

    if (cart !== "all" && gender !== "all" && size !== "all") {
      theProducts = await Items.find({
        category: cart,
        gender: gender,
        size: size,
      });
    }

    if (cart !== "all" && size !== "all" && gender !== "all") {
      theProducts = await Items.find({
        category: cart,
        size: size,
        gender: gender,
      });
    }

    if (size !== "all" && gender !== "all" && cart !== "all") {
      theProducts = await Items.find({
        category: cart,
        gender: gender,
        size: size,
      });
    }

    if (cart === "all" && gender === "all" && size === "all") {
      theProducts = await Items.find();
    }

    let sortPriceAsec = () =>
      theProducts?.sort((item1, item2) => {
        return item1.price - item2.price;
      });

    let sortPriceDesec = () =>
      theProducts?.sort((item1, item2) => {
        return item2.price - item1.price;
      });

    let sorteddate = theProducts
      ?.slice()
      .sort((objA, objB) => Number(objA.date) - Number(objB.date));

    if (sort === "lowest") {
      sortPriceAsec();
    }

    if (sort === "highest") {
      sortPriceDesec();
    }

    if (sort === "newest") {
      sorteddate();
    }
    res.json(theProducts);
  }
);

module.exports = router;
