const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Users = require("../model/Users");
const Store = require("../model/Store");

router.get(
  "/user/:id",
  /*reactAuth,*/ async (req, res) => {
    const id = req.params.id;
    try {
      const user = await Users.find({ _id: id });
      const store = await Store.find({ _id: id });

      function isEmpty(val) {
        return val === undefined || val == null || val.length <= 0
          ? true
          : false;
      }

      if (isEmpty(user) === true) {
        res.json(store);
      }

      if (isEmpty(store) === true) {
        res.json(user);
      }

      // res.json(user);
    } catch (err) {
      res.json(err);
      console.log(err);
    }
  }
);

module.exports = router;
