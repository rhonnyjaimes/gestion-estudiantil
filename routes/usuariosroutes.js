const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');


router.get('/logout', (req, res) => {
    res.clearCookie('token'); // Limpiar la cookie del token
    res.redirect('/usuarios/login'); // Redirigir a la página principal de inicio de sesión
});
// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login', { error_messages: [] });
});

router.get('/registrar', (req, res) => {
    res.render('registrar'); // Renderiza la vista 'registrar.ejs'
});

// Ruta para procesar el inicio de sesión
router.post('/login', UsuariosController.iniciarSesion);

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
