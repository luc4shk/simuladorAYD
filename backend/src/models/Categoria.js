const {DataTypes} = require('sequelize');

//Importamos el objeto de conexión
const sequelize = require('../database/db');


// Creamos el esquema del modelo
const Categoria =sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty:{
                msg: "El nombre de la categoria no puede ser vacio"
            },
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
            notEmpty:{
                msg: "La descripción de la categoria no puede ser vacia"
            },
            len:{
                args: [10, 200],
                msg: "La descripción debe contener minímo 10 caracteres"
            }
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    competencia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'competencias',
            key: 'id'
        }
    }
}, {
    timestamps: false
});

// Exportamos el modelo
module.exports = Categoria;
