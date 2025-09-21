// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware')

// Importar las funciones del controlador
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// Rutas
router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/', auth, createUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;