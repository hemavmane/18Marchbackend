const { format } = require("date-fns");
const express = require("express");
const ProductController = require("../Controller/banner");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Banner");
  },
  filename: function (req, file, cb) {
    const formattedDate = format(new Date(), "yyyy-MM-dd_HH-mm-ss");
    cb(null, formattedDate + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});


router.post(
  "/addbanner",
  upload.single("BannerImag"), 
  ProductController.addBanner
);

router.get("/getbanner", ProductController.getBanner);
router.post("/trash/:id", ProductController.deletebaner);
module.exports = router;
