const { format } = require("date-fns");
const express = require("express");
const ClientController = require("../Controller/clients");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/Clientimage");
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
    "/addClient",
    upload.single("profile"),
    ClientController.AddClient
);

router.get("/getclient", ClientController.getclient);
router.post("/trashclient/:id", ClientController.deleteclient);
module.exports = router;

