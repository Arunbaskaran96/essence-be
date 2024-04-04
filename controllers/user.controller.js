const usermodel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const addUser = async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, password } = req.body;
    const newUser = new usermodel({
      firstName,
      lastName,
      email,
      mobile,
      password,
    });
    await newUser.save();
    res.status(200).json({ message: "success", newUser });
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await usermodel.findOne({ email });
    if (isUser) {
      const compare = await bcrypt.compare(password, isUser.password);
      if (compare) {
        const token = jwt.sign({ id: isUser._id }, process.env.JWT_SCT, {
          expiresIn: "30d",
        });
        const { password, ...user } = isUser._doc;
        res.status(200).json({ success: true, token, user });
      } else {
        console.log("incorrect user/password");
      }
    } else {
      console.log("no user found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addUser, signin };
