const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model('category', categorySchema);

const seedCategories = async () => {
  try {
    const categories = await Category.find();
    if (!categories.length) {
      const categoriesToCreate = ['Shirts', 'Pants', 'Shoes', 'Accessories'];
      categoriesToCreate.forEach(async (category) => {
        await Category.create({ name: category });
      });
      console.log('Categories created');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model.Category || Category;
