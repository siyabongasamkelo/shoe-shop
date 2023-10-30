const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Items = require("../model/Items");

router.delete(
  "/item/:id",
  /*reactAuth,*/ async (req, res) => {
    const id = req.params.id;

    if (id.length !== 0) {
      try {
        const item = await Items.destroy({ where: { id } });
        res.json({ message: "item successfully deleted" });
      } catch (err) {
        res.json({
          err: err,
          message: "an error occured while deleting your peoduct",
        });
        console.log(err);
      }
    } else {
      res.json("input error");
    }
  }
);

module.exports = router;
