const router = require('express').Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../controllers/order');

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrder);

module.exports = router;
