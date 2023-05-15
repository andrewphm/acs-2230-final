const router = require('express').Router();

const { verifyToken, verifyAdmin } = require('../controllers/verifyToken');

const {
  createCategory,
  getAllCategories,
  getOneCategory,
  deleteCategory,
  updateCategory,
} = require('../controllers/category');

router.post('/', verifyAdmin, createCategory);
router.get('/', getAllCategories);
router.get('/:id', getOneCategory);
router.delete('/:id', verifyAdmin, deleteCategory);
router.put('/:id', verifyAdmin, updateCategory);

module.exports = router;
