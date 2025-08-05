const Estudiante = require('../models/estudiante');
const conexion = require('../db');


exports.obtenerEstudiantes = (req, res) => {
    // Suponiendo que req.user contiene la información del usuario autenticado
    const usuario = req.user; // Asegúrate de que req.user esté disponible y tenga los datos necesarios

    Estudiante.obtenerTodos(conexion)
        .then(estudiantes => {
            res.render('index', { 
                estudiantes, 
                usuario // Pasa el objeto usuario a la vista
            });
        })
        .catch(err => {
            console.error('Error al obtener estudiantes:', err);
            res.status(500).json({ error: err.message });
        });
};

exports.mostrarEditarEstudiante = (req, res) => {
    const { id } = req.params;
  
    Estudiante.obtenerPorId(conexion, id)
      .then(estudiante => {
        if (!estudiante) {
          return res.status(404).render('error', { message: 'Estudiante no encontrado' });
        }
        res.render('editar', { estudiante }); // Renderiza la vista de editar
      })
      .catch(err => res.status(500).render('error', { message: err.message }));
  };

exports.obtenerEstudiantePorId = (req, res) => {
    const { id } = req.params;
    Estudiante.obtenerPorId(conexion, id)
        .then(estudiante => {
            if (!estudiante) return res.status(404).render('error', { message: 'Estudiante no encontrado' }); // Asegúrate de tener una vista de error si es necesario
            res.render('detalle', { estudiante }); // Renderiza la vista detalle.ejs con los datos del estudiante
        })
        .catch(err => res.status(500).render('error', { message: err.message })); // Renderiza una vista de error si ocurre un problema
};
exports.crearEstudiante = (req, res) => {
    const nuevoEstudiante = req.body;
    Estudiante.crear(conexion, nuevoEstudiante)
        .then(() => res.redirect('/estudiantes')) // Redirige a la lista de estudiantes después de agregar
        .catch(err => res.status(500).json({ error: err.message }));
};


exports.actualizarEstudiante = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    Estudiante.actualizar(conexion, id, datosActualizados)
        .then(affectedRows => {
            if (affectedRows === 0) return res.status(404).json({ error: 'Estudiante no encontrado' });
            res.redirect('/estudiantes'); // Redirige a la página principal de estudiantes
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.eliminarEstudiante = (req, res) => {
    const { id } = req.params;
    Estudiante.eliminar(conexion, id)
        .then(() => {
            res.redirect('/estudiantes'); 
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.obtenerEstudiantesPorCarrera = (req, res) => {
    const { carrera } = req.params;
    Estudiante.obtenerPorCarrera(conexion, carrera)
        .then(estudiantes => {
            res.render('estudiantescarreras', { estudiantes, carrera });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.obtenerEstudiantesInscritos = (req, res) => {
    Estudiante.obtenerInscritos(conexion)
        .then(estudiantes => {
            res.render('inscritos', { estudiantesInscritos: estudiantes });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.obtenerEstudiantesConDeuda = (req, res) => {
    Estudiante.obtenerConDeuda(conexion)
        .then(estudiantesConDeuda => {
            res.render('deudas', { estudiantesConDeuda });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.pagarDeuda = (req, res) => {
    const estudianteId = req.params.id;
    Estudiante.pagarDeuda(conexion, estudianteId)
        .then(() => {
            res.json({ success: true, message: 'Estudiante marcado como solvente.' });
        })
        .catch(err => {
            res.status(500).json({ success: false, error: err.message });
        });
};