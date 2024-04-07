const express = require("express");
const router = express.Router();

const { addUser, signin, address } = require("../controllers/user.controller");
router.route("/addUser").post(addUser);
router.route("/signin").post(signin);
router.route("/address/:id").put(address);

module.exports = router;
