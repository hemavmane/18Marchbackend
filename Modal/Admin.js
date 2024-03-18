const mongoose = require("mongoose");

const Authmodel = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  status:String
});

const AuthModel = mongoose.model("admin", Authmodel);
module.exports = AuthModel;
