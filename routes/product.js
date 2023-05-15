const router = require('express').Router();

const {
  createProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/product');

const { verifyToken, verifyAdmin } = require('../controllers/verifyToken');

router.post('/:categoryId', verifyAdmin, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.delete('/:id', verifyAdmin, deleteProduct);
router.put('/:id', verifyAdmin, updateProduct);

module.exports = router;
