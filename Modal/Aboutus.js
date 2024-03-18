const mongoose = require("mongoose");

const Aboutus = mongoose.Schema({
    phone: String,
    email: String,
    OfficeAddress: String,
    images:String
});

const Aboutuss = mongoose.model("aboutus", Aboutus);
module.exports = Aboutuss;
