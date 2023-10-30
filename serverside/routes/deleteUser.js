const router = require("express").Router();
const Users = require("../model/Users");

router.delete("/User/:id", (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: { id },
  }).then((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("User deleted Successfuly");
    }
  });
});
