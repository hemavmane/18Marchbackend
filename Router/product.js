const { format } = require("date-fns");
const express = require("express");
const ProductController = require("../Controller/AddData");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/productiamg");
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
  "/addProduct",
  upload.single("imageURL"), 
  ProductController.addProduct
);

router.get("/getproduct", ProductController.getProduct);
router.put("/updateproduct/:id", ProductController.updateProduct);
router.get("/getbyid/:id", ProductController.getbyid);
router.post("/trashproduct/:id", ProductController.trash);

module.exports = router;
