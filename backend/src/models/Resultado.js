const {DataTypes} = require('sequelize');

// Importamos el modelo de conexión
const sequelize = require('../database/db');

// Creamos el esquema del modelo
const Resultado = sequelize.define('resultados', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    puntaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty:{
                msg: "El puntaje no puede ser vacio"
            },
            isNumeric: {
                msg: "El puntaje solo puede ser un valor numerico"
            },
            min: {
                args: 0,
                msg: "El puntaje debe ser mayor o igual a 0"
            },
            max: {
                args: 100,
                msg: "El puntaje debe ser menor o igual a 100"
            }
        }
    },
    fecha_finalizacion: {
        type: DataTypes.DATE,
        validate: {
            notEmpty:{
                msg: "La fecha de finalización no puede ser vacia"
            },
            isDate: {
                msg : "Por favor ingrese un formato de fecha válido"
            }
        }
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categorias',
            key: 'id'
        }
    }
}, {
    timestamps: false
});

//Exportsamos el modelo
module.exports = Resultado;