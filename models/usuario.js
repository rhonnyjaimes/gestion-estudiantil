const conexion = require('../db'); 
const bcrypt = require('bcrypt');

class Usuario {
    constructor(id, username, password, rol) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.rol = rol;
    }

    static crear({ username, password, rol }) {
        return new Promise((resolve, reject) => {
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
                if (err) reject(err);
                
                const query = 'INSERT INTO usuarios (username, password, rol) VALUES (?, ?, ?)';
                conexion.query(query, [username, hashedPassword, rol], (error, results) => {
                    if (error) return reject(error);
                    resolve(results.insertId);
                });
            });
        });
    }

    static obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM usuarios WHERE id = ?';
            conexion.query(query, [id], (error, results) => {
                if (error) return reject(error);
                resolve(results[0]);
            });
        });
    }

    static actualizar(id, { username, password, rol }) {
        return new Promise((resolve, reject) => {
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
                if (err) reject(err);

                const query = 'UPDATE usuarios SET username = ?, password = ?, rol = ? WHERE id = ?';
                conexion.query(query, [username, hashedPassword, rol, id], (error, results) => {
                    if (error) return reject(error);
                    resolve(results);
                });
            });
        });
    }

    static eliminar(id) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM usuarios WHERE id = ?';
            conexion.query(query, [id], (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    static obtenerTodos() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM usuarios';
            conexion.query(query, (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }
}

module.exports = Usuario;
