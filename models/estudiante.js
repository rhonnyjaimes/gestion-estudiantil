class Estudiante {
    constructor(id, nombre, cedula, edad, carrera, correo, inscrito = true, deuda = 0.00) {
        this.id = id;
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
        this.carrera = carrera;
        this.correo = correo;
        this.inscrito = inscrito;
        this.deuda = deuda;
    }

    static obtenerTodos(conexion) {
        return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM estudiantes', (err, resultados) => {
                if (err) return reject(err);
                resolve(resultados);
            });
        });
    }

    static obtenerPorId(conexion, id) {
        return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM estudiantes WHERE id = ?', [id], (err, resultados) => {
                if (err) return reject(err);
                resolve(resultados[0]);
            });
        });
    }

    static crear(conexion, nuevoEstudiante) {
        return new Promise((resolve, reject) => {
            conexion.query('INSERT INTO estudiantes SET ?', nuevoEstudiante, (err, resultado) => {
                if (err) return reject(err);
                resolve(resultado.insertId);
            });
        });
    }

    static actualizar(conexion, id, datosActualizados) {
        return new Promise((resolve, reject) => {
            conexion.query('UPDATE estudiantes SET ? WHERE id = ?', [datosActualizados, id], (err, resultado) => {
                if (err) return reject(err);
                resolve(resultado.affectedRows);
            });
        });
    }

    static eliminar(conexion, id) {
        return new Promise((resolve, reject) => {
            conexion.query('DELETE FROM estudiantes WHERE id = ?', [id], (err, resultado) => {
                if (err) return reject(err);
                resolve(resultado.affectedRows);
            });
        });
    }

    static obtenerPorCarrera(conexion, carrera) {
        return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM estudiantes WHERE carrera = ?', [carrera], (err, resultados) => {
                if (err) return reject(err);
                resolve(resultados);
            });
        });
    }

    static obtenerInscritos(conexion) {
        return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM estudiantes WHERE inscrito = 1', (err, resultados) => {
                if (err) return reject(err);
                resolve(resultados);
            });
        });
    }

    static obtenerConDeuda(conexion) {
        return new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM estudiantes WHERE deuda > 0', (err, resultados) => {
                if (err) return reject(err);
                resolve(resultados);
            });
        });
    }
}

module.exports = Estudiante;
