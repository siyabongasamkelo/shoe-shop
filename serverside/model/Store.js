const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const storeSchema = new Schema({
  storename: {
    type: String,
    unique: false,
    require: false,
  },
  password: {
    type: String,
    unique: false,
    require: false,
  },
  email: {
    type: String,
    unique: true,
    require: false,
  },
  image: {
    type: String,
    unique: false,
    require: false,
  },
  description: {
    type: String,
    unique: false,
    require: false,
  },
});

storeSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method login
storeSchema.statics.login = async function (email, password) {
  const store = await this.findOne({ email });
  if (store) {
    const auth = await bcrypt.compare(password, store.password);
    if (auth) {
      return store;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
