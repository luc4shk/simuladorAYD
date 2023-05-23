const {DataTypes} = require('sequelize');

// Importamos el modelo de conexión
const sequelize = require('../database/db');


// Creamos el esquema del modelo
const Inscripcion = sequelize.define('inscripciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inscripcion: {
        type: DataTypes.DATE,
        validate: {
            isDate: {
                msg: "Favor ingresar un formato de fecha valido"
            }
        }
    },
    estudiante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        allowNull: false
    },
    convocatoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'convocatorias',
            key: 'id'
        },
        allowNull: false
    },
    resultado_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'resultados',
            key: 'id'
        },
        allowNull: false
    },
});


// Exportamos el modelo de inscripciones
module.exports = Inscripcion;