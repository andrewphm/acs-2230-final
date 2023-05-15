const router = require('express').Router();

const {
  createProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/product');

router.post('/:categoryId', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;
