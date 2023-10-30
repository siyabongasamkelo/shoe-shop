const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ordersSchema = new schema({
  itemId: {
    type: String,
    unique: false,
    require: true,
  },
  itemName: {
    type: String,
    unique: false,
    require: true,
  },
  itemPrice: {
    type: String,
    unique: false,
    require: true,
  },
  itemImage: {
    type: String,
    unique: false,
    require: true,
  },
  storeId: {
    type: String,
    unique: false,
    require: true,
  },
  buyerId: {
    type: String,
    unique: false,
    require: true,
  },
  quantity: {
    type: Number,
    unique: false,
    required: true,
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

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
