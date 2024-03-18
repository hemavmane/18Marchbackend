const { format } = require("date-fns");
const express = require("express");
const AboutController = require("../Controller/about");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/Aboutimage");
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
    "/addAbout",
    upload.single("images"),
    AboutController.AddAbout
);

router.get("/getAbout", AboutController.getAbout);
router.post("/trashabout/:id", AboutController.deleteAbout);
module.exports = router;
