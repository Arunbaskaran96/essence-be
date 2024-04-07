const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Enter Your Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please Enter Your Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
    },
    mobile: {
      type: Number,
      required: [true, "Please Enter MobileNo"],
      // length: [10, "Mobile Number number should 10 digits"],
    },
    address: [
      {
        contactName: {
          type: String,
        },
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        pincode: {
          type: String,
        },
        contactNo: {
          type: String,
        },
        state: {
          type: String,
        },
      },
    ],
  },
  { timeseries: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("user", userSchema);
