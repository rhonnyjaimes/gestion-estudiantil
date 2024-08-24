const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

class UsuariosController {
    // Método para registrar un nuevo usuario
    static async registrarUsuario(req, res) {
        const { username, password, rol } = req.body;

        if (!username || !password || !rol) {
            return res.status(400).send('Todos los campos son obligatorios');
        }

        if (rol !== 'Admin' && rol !== 'Editor') {
            return res.status(400).send('Rol inválido');
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const nuevoUsuario = await Usuario.create({
                username,
                password: hashedPassword,
                rol
            });

            res.status(201).send(`Usuario ${nuevoUsuario.username} creado exitosamente`);
        } catch (error) {
            res.status(500).send('Error al registrar usuario: ' + error.message);
        }
    }

    // Método para editar un usuario existente
    static async editarUsuario(req, res) {
        const { id } = req.params;
        const { username, password, rol } = req.body;

        if (!id || !username || !rol) {
            return res.status(400).send('ID, nombre de usuario y rol son obligatorios');
        }

        if (rol !== 'Admin' && rol !== 'Editor') {
            return res.status(400).send('Rol inválido');
        }

        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).send('Usuario no encontrado');
            }

            const hashedPassword = password ? await bcrypt.hash(password, 10) : usuario.password;

            await usuario.update({
                username,
                password: hashedPassword,
                rol
            });

            res.status(200).send(`Usuario ${usuario.username} actualizado exitosamente`);
        } catch (error) {
            res.status(500).send('Error al actualizar usuario: ' + error.message);
        }
    }

    // Método para eliminar un usuario
    static async eliminarUsuario(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send('ID es obligatorio');
        }

        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).send('Usuario no encontrado');
            }

            await usuario.destroy();
            res.status(200).send(`Usuario ${usuario.username} eliminado exitosamente`);
        } catch (error) {
            res.status(500).send('Error al eliminar usuario: ' + error.message);
        }
    }
}

module.exports = UsuariosController;
