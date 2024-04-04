const express = require("express");
const router = express.Router();

const { addUser, signin } = require("../controllers/user.controller");
router.route("/addUser").post(addUser);
router.route("/signin").post(signin);

module.exports = router;
