const Usuario = require('../models/Usuario');

class UsuariosController {
    static registrar(req, res) {
        const { username, password, rol } = req.body;
        Usuario.crear({ username, password, rol })
            .then(id => res.status(201).json({ message: 'Usuario registrado exitosamente', id }))
            .catch(error => res.status(500).json({ error: 'Error al registrar usuario', details: error }));
    }

    static obtenerUsuarios(req, res) {
        Usuario.obtenerTodos()
            .then(usuarios => res.status(200).json(usuarios))
            .catch(error => res.status(500).json({ error: 'Error al obtener usuarios', details: error }));
    }

    static obtenerUsuarioPorId(req, res) {
        const { id } = req.params;
        Usuario.obtenerPorId(id)
            .then(usuario => {
                if (!usuario) {
                    return res.status(404).json({ error: 'Usuario no encontrado' });
                }
                res.status(200).json(usuario);
            })
            .catch(error => res.status(500).json({ error: 'Error al obtener usuario', details: error }));
    }

    static actualizarUsuario(req, res) {
        const { id } = req.params;
        const { username, password, rol } = req.body;
        Usuario.actualizar(id, { username, password, rol })
            .then(() => res.status(200).json({ message: 'Usuario actualizado exitosamente' }))
            .catch(error => res.status(500).json({ error: 'Error al actualizar usuario', details: error }));
    }

    static eliminarUsuario(req, res) {
        const { id } = req.params;
        Usuario.eliminar(id)
            .then(() => res.status(200).json({ message: 'Usuario eliminado exitosamente' }))
            .catch(error => res.status(500).json({ error: 'Error al eliminar usuario', details: error }));
    }
}

module.exports = UsuariosController;
