const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const result = await newOrder.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the order' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the order' });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json(updatedOrder);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating the order' });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json({ message: 'Order deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the order' });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
