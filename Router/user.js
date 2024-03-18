
const express = require("express");
const USerInfoController = require("../Controller/User");
const router = express.Router();



router.post("/adduserinfo", USerInfoController.AddUserInfo);
router.get("/getuserinfo", USerInfoController.getuserInfo);
module.exports = router;
