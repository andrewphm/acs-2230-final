const mongoose = require('mongoose');
const autoPopulate = require('../utils/autoPopulate');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

productSchema.pre('findOne', autoPopulate('category')).pre('find', autoPopulate('category'));

const Product = mongoose.model('product', productSchema);

module.exports = mongoose.model.Product || Product;
