const {DataTypes} = require('sequelize');

// Importamos el modelo de Usuario
const Usuario = require('./Usuario');

// Importamos el objeto de conexión
const sequelize = require('../database/db');

// Creamos el esquema del modelo rol
const Rol = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Asociación Usuario - Rol
Rol.hasMany(Usuario);

Usuario.belongsTo(Rol);

// Exportamos el modelo
module.exports = Rol;