const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');

// Ruta para registrar un nuevo usuario
router.post('/registrar', UsuariosController.registrar);

// Ruta para obtener todos los usuarios
router.get('/', UsuariosController.obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', UsuariosController.obtenerUsuarioPorId);

// Ruta para actualizar un usuario por su ID
router.put('/:id', UsuariosController.actualizarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', UsuariosController.eliminarUsuario);

module.exports = router;
