const { format } = require('date-fns');
const express = require("express");
const AuthController = require("../Controller/Admin");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Image");
  },
  filename: function (req, file, cb) {
    const formattedDate = format(new Date(), "yyyy-MM-dd_HH-mm-ss");
    cb(null, formattedDate + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/adduser", upload.single("profileImage"), AuthController.addUser);
router.post("/login", AuthController.Login);
router.get("/getuser",  AuthController.getuser);
router.post("/logout/:id", AuthController.getsignout);

module.exports = router;
