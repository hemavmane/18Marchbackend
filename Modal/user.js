const mongoose = require("mongoose");

const USerModal = mongoose.Schema({
  phone: String,
  email: String,
  username:String,
  message:String
});

const USerModals = mongoose.model("userInfo", USerModal);
module.exports = USerModals;
