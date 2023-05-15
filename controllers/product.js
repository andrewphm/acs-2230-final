const Product = require('../models/Product');
const Category = require('../models/Category');

const createProduct = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const category = await Category.findById(categoryId);

    const product = new Product({ ...req.body, category: category._id });
    const savedProduct = await product.save();

    return res.status(201).json({ product: savedProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json({ product });
    }
    return res.status(404).json({ message: 'Product not found!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Product deleted');
    }
    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found!' });
    }
    return res.status(200).json({ product: updatedProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
