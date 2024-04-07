const express = require("express");
const router = express.Router();

const {
  addProducts,
  getProducts,
  getProductById,
  searchProduct,
} = require("../controllers/product.controller");
router.route("/addProduct").post(addProducts);
router.route("/getProducts").get(getProducts);
router.route("/product/:id").get(getProductById);
router.route("/products").get(searchProduct);

module.exports = router;
