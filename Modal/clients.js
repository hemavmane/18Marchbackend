const mongoose = require("mongoose");

const Clients = mongoose.Schema({
    phone: String,
    email: String,
    Address: String,
    profile: String,
    ClientName:String,
});

const Clientss = mongoose.model("clients", Clients);
module.exports = Clientss;
