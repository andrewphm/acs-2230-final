const router = require('express').Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../controllers/order');

const { verifyToken, verifyAdmin } = require('../controllers/verifyToken');

router.post('/', verifyToken, createOrder);
router.get('/', verifyAdmin, getAllOrders);
router.get('/:id', verifyToken, getOrderById);
router.delete('/:id', verifyToken, deleteOrder);
router.put('/:id', verifyToken, updateOrder);

module.exports = router;
