const express = require('express');
const UsuariosController = require('../controllers/usuariosController');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', UsuariosController.registrarUsuario);

// Ruta para editar un usuario
router.put('/edit/:id', UsuariosController.editarUsuario);

// Ruta para eliminar un usuario
router.delete('/delete/:id', UsuariosController.eliminarUsuario);

module.exports = router;
