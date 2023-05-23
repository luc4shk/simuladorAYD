const {DataTypes} = require('sequelize');

// Importamos el modelo de conexión
const sequelize = require('../database/db');


// Creamos el esquema del modelo
const Convocatoria = sequelize.define('convocatorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [10, 35],
                msg: "El nombre solo ha de contener entre 10 y 35 caracteres"
            }
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [10, 35],
                msg: "El nombre solo ha de contener entre 10 y 35 caracteres"
            }
        }
    },
    fecha_inicio: {},
    fecha_fin: {},
    estado: {},
    prueba_id: {}
});


// Exportamos el modelo de inscripciones
module.exports = Inscripcion;