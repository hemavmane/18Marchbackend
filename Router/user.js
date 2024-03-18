
const express = require("express");
const USerInfoController = require("../Controller/User");
const router = express.Router();



router.post("/adduserinfo", USerInfoController.AddUserInfo);
router.get("/getuserinfo", USerInfoController.getuserInfo);
router.post("/trashuserinfo/:id", USerInfoController.deleteuserifo);
module.exports = router;
