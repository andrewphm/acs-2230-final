const router = require('express').Router();

const { getAllUsers, getOneUser, updateUser, deleteUser } = require('../controllers/user');

const { verifyToken, verifyAdmin } = require('../controllers/verifyToken');

router.get('/', verifyAdmin, getAllUsers);
router.get('/:id', verifyAdmin, getOneUser);
router.delete('/:id', verifyToken, deleteUser);
router.put('/:id', verifyAdmin, updateUser);
