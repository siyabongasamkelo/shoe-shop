const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
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
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method login
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect passwor");
  }
  throw Error("incorrect email");
};

const Users = mongoose.model("User", userSchema);
module.exports = Users;
