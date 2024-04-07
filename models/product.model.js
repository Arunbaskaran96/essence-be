const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  brand: {
    type: String,
    required: [true, "brand is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  price: {
    type: Number,
    required: [true, "title is required"],
  },
  about: [
    {
      des: {
        type: String,
        required: [true, "description is required"],
      },
    },
  ],
});

module.exports = mongoose.model("products", productSchema);
