const mysql = require('mysql2');
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const conexion = mysql.createConnection({
     host: 'mysql-rhonnyjaimes.alwaysdata.net',
  user: '425364_rhonny',
  password: 'database425364',
  database: 'rhonnyjaimes_gestion-estudiantil',
  port: 3306
});

conexion.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

module.exports = conexion;
