const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();


mongoose
  .connect(process.env.Db)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

const Authentication = require("./Router/Admin.js")
const Details = require("./Router/product.js")
const Banner = require("./Router/Banner.js")
const contactus = require("./Router/user")
const clients = require("./Router/clients.js")
const About = require("./Router/About.js")

app.use("/api",Authentication)
app.use("/api",Details)
app.use("/api",Banner)
app.use("/api/uinfo",contactus)
app.use("/api",clients)
app.use("/api",About)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});