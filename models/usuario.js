const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que este archivo configure y exporte una instancia de Sequelize

class Usuario extends sequelize.Model {
    // Métodos estáticos o de instancia pueden ser añadidos aquí si se requiere
}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('Admin', 'Editor'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;
