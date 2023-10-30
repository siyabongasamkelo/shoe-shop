const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reviewSchema = new schema({
  writerId: {
    type: String,
    unique: false,
    require: true,
  },
  productId: {
    type: String,
    unique: false,
    require: true,
  },
  productName: {
    type: String,
    unique: false,
    require: true,
  },
  productpic: {
    type: String,
    unique: false,
    require: true,
  },
  storeID: {
    type: String,
    unique: false,
    require: true,
  },
  review: {
    type: String,
    unique: false,
    require: true,
  },
  rating: {
    type: Number,
    unique: false,
    require: true,
  },
});

const Reviews = mongoose.model("Reviews", reviewSchema);
module.exports = Reviews;
