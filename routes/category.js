const router = require('express').Router();

const {
  createCategory,
  getAllCategories,
  getOneCategory,
  deleteCategory,
  updateCategory,
} = require('../controllers/category');

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getOneCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

module.exports = router;
