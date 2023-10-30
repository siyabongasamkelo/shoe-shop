const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messagesSchema = new schema({
  author: {
    type: String,
    unique: false,
    require: true,
  },
  receiver: {
    type: String,
    unique: false,
    require: true,
  },
  message: {
    type: String,
    unique: false,
    require: true,
  },

  date: {
    type: String,
    unique: false,
    require: true,
  },
  status: {
    type: String,
    unique: false,
    require: true,
  },
});

const Messages = mongoose.model("Messages", messagesSchema);
module.exports = Messages;
