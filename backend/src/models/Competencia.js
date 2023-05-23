const {DataTypes} = require('sequelize');

//Importamos el modelo de conexión
const sequelize = require('../database/db');

const Competencia = sequelize.define('competencias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [5, 25],
                msg: "El nombre solo puede contener entre 5 y 25 caracteres"
            }
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [10, 200],
                msg: "La descripción debe contener minímo 10 caracteres"
            }
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Competencia;
