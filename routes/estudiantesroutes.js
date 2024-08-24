const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantescontroller');
const verificarToken = require('../middleware/auth');
const verificarRol = require('../middleware/roles');

// Middleware para verificar el token en todas las rutas
router.use(verificarToken);

// Rutas para obtener estudiantes inscritos y con deuda (acceso para Admin y Editor)
router.get('/inscritos', verificarRol(['admin', 'editor']), estudiantesController.obtenerEstudiantesInscritos);
router.get('/deudas', verificarRol(['admin', 'editor']), estudiantesController.obtenerEstudiantesConDeuda);

// Ruta para agregar estudiante (solo Admin)
router.get('/agregar', verificarRol(['admin']), (req, res) => {
    res.render('agregar'); // Renderiza la vista agregar.ejs
});

router.post('/agregar', verificarRol(['admin']), estudiantesController.crearEstudiante);

// Ruta para editar estudiante (Admin y Editor)
router.get('/editar/:id', verificarRol(['admin', 'editor']), estudiantesController.mostrarEditarEstudiante);
router.put('/:id',  estudiantesController.actualizarEstudiante);

// Ruta para obtener un estudiante por su ID (Admin y Editor)
router.get('/:id', verificarRol(['admin', 'editor']), estudiantesController.obtenerEstudiantePorId);

// Ruta para eliminar un estudiante (solo Admin)
router.delete('/:id', verificarRol(['admin']), estudiantesController.eliminarEstudiante);

// Ruta para obtener estudiantes por carrera (Admin y Editor)
router.get('/carrera/:carrera', verificarRol(['admin', 'editor']), estudiantesController.obtenerEstudiantesPorCarrera);

// Ruta para obtener todos los estudiantes (solo Admin)
router.get('/', verificarRol(['admin', "editor"]), estudiantesController.obtenerEstudiantes);

module.exports = router;
