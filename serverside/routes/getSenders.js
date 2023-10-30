const router = require("express").Router();
const { reactAuth } = require("../middleware/reactAuth");
const Messages = require("../model/Message");

router.get(
  "/senders/:id",
  /*reactAuth,*/ async (req, res) => {
    const id = req.params.id;

    try {
      const recievedMessages = await Messages.find({
        receiver: id,
      });

      let senders = [];

      for (let i = 0; i < recievedMessages.length; i++) {
        senders.push(recievedMessages[i].author);
      }

      function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
      }

      let testing = removeDuplicates(senders);
      console.log(testing);

      res.json(testing);
    } catch (err) {
      res.json(err);
      console.log(err);
    }
  }
);

module.exports = router;
