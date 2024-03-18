const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
    BannerImag: String,
}, { timestamps: true });


const Bannermodel = mongoose.model("Banner", BannerSchema);
module.exports = Bannermodel;
