const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  quantity: {
    type: Number,
    required: false,
    unique: false,
  },
  info: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Items = mongoose.model("Item", itemSchema);
module.exports = Items;
