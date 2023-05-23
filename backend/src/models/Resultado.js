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
            isNumeric: {
                msg: "El puntaje solo puede contener números"
            },
            len: {
                args: [0, 100],
                msg: "El puntaje debe estar en un rango de 0 a 100"
            }
        }
    },
    fecha_finalizacion: {
        type: DataTypes.DATE,
        validate: {
            isDate: {
                msg : "Por favor ingrese un formato de fecha válido"
            }
        }
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categorias',
            key: 'id'
        }
    }
});

//Exportsamos el modelo
module.exports = Resultado;