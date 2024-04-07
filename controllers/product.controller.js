const productModel = require("../models/product.model");

const addProducts = async (req, res) => {
  try {
    const { title, price, about, image, brand, category } = req.body;
    const newProduct = new productModel({
      title,
      price,
      about,
      image,
      brand,
      category,
    });
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    // let category = req.query.category || "";
    // let brand = req.query.brand || "";
    // let filteredProducts = [];
    // if (category != "") {
    //   category = category.split(",");
    //   const products = await productModel.find({ category: { $in: category } });
    //   filteredProducts = [...filteredProducts, ...products];
    // } else {
    //   const products = await productModel.find({
    //     category: { $regex: category },
    //   });
    //   filteredProducts = [...filteredProducts, ...products];
    // }
    // if (brand != "") {
    //   brand = brand.split(",");
    //   const products = await productModel.find({ brand: { $in: brand } });
    //   filteredProducts = [...filteredProducts, ...products];
    // } else {
    //   const products = await productModel.find({
    //     brand: { $regex: brand },
    //   });
    //   filteredProducts = [...filteredProducts, ...products];
    // }
    const products = await productModel.find({});
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);
  }
};

const searchProduct = async (req, res) => {
  try {
    const products = await productModel.find({
      title: {
        $regex: req.query.search,
      },
    });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProducts, getProducts, getProductById, searchProduct };
