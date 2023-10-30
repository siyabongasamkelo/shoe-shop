const router = require("express").Router();
const Products = require("../model/Products");

router.delete("/product/:id", (req, res) => {
  const id = req.params.id;

  Products.destroy({
    where: { id },
  }).then((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Successfuly deleted");
    }
  });
});

module.exports = router;
