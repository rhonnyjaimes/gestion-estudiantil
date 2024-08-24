const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');
const verificarToken = require('../middleware/auth');
const verificarRol = require('../middleware/roles');



router.get('/acceso-denegado', (req, res) => {
    res.render('acceso-denegado'); // Renderiza la vista acceso_denegado.ejs
});
// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login', { error_messages: [] });
});

// Ruta para registrar un nuevo usuario
router.get('/registrar', (req, res) => {
    res.render('registrar'); // Renderiza la vista 'registrar.ejs'
});

// Ruta para procesar el inicio de sesión
router.post('/login', UsuariosController.iniciarSesion);

// Ruta para registrar un nuevo usuario
router.post('/registrar', UsuariosController.registrar);

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
    res.clearCookie('token'); // Limpiar la cookie del token
    res.redirect('/usuarios/login'); // Redirigir a la página principal de inicio de sesión
});

// Ruta para editar un usuario (debe ser antes de obtener usuario por ID para evitar conflicto)
router.get('/editar/:id', verificarToken, verificarRol(['admin']), UsuariosController.editarUsuario);


// Ruta para obtener todos los usuarios
router.get('/', verificarToken, verificarRol(['admin']), UsuariosController.obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', verificarToken, UsuariosController.obtenerUsuarioPorId);

// Ruta para actualizar un usuario por su ID
router.put('/:id', verificarToken, verificarRol(['admin']), UsuariosController.actualizarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', verificarToken, verificarRol(['admin']), UsuariosController.eliminarUsuario);



module.exports = router;
