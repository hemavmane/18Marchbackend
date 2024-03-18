const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  imageURL: String,
  price: Number,
  manufacturer: String,
  category: String,
  specifications: String,
}, { timestamps: true });


const productmodel = mongoose.model("product", productSchema);
module.exports = productmodel;
