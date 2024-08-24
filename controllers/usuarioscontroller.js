const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const flash = require('connect-flash');



class UsuariosController {
    static registrar(req, res) {
        const { username, password, rol } = req.body;
        Usuario.crear({ username, password, rol })
            .then(id => {
                // Redirige al usuario a la página de inicio de sesión
                res.redirect('/usuarios/login');
            })
            .catch(error => {
                // En caso de error, muestra un mensaje de error en la misma página de registro
                req.flash('error', 'Error al registrar usuario. Inténtalo de nuevo.');
                res.redirect('/usuarios/registrar');
            });
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
    static iniciarSesion(req, res) {
        const { username, password } = req.body;

        Usuario.obtenerPorUsername(username)
            .then(usuario => {
                if (!usuario) {
                    return res.render('login', { error_messages: ['Usuario no encontrado'] });
                }

                return bcrypt.compare(password, usuario.password)
                    .then(coincide => {
                        if (!coincide) {
                            return res.render('login', { error_messages: ['Contraseña incorrecta'] });
                        }

                        // Función para generar el token JWT
                        const generarToken = (usuario) => {
                            if (!usuario.id || !usuario.rol) {
                                throw new Error('Usuario debe tener id y rol');
                            }

                            // Genera el token con un payload y una clave secreta
                            return jwt.sign(
                                {
                                    id: usuario.id,
                                    rol: usuario.rol,
                                    username: usuario.username // Incluye otros datos si es necesario
                                },
                                process.env.JWT_SECRET, // Clave secreta
                                {
                                    expiresIn: '1h' // Tiempo de expiración del token
                                }
                            );
                        };

                        // Genera el token
                        const token = generarToken(usuario);

                        // Enviar cookie con el token
                        res.cookie('token', token, { httpOnly: true });
                        res.redirect('/estudiantes');
                    });
            })
            .catch(error => res.render('login', { error_messages: ['Error al iniciar sesión'] }));
    }
}

module.exports = UsuariosController;
