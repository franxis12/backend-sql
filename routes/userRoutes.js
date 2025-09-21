// routes/userRoutes.js
const express = require('express');
const router = express.Router();

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
//router.get('/:id', getUserById);
//router.post('/', createUser);
//router.put('/:id', updateUser);
//router.delete('/:id', deleteUser);

module.exports = router;