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
        allowNull: false,
        validate: {
            notEmpty:{
                msg: "La fecha de inscripcion no puede estar vacia"
            },
            isDate: {
                msg: "Favor ingresar un formato de fecha valido"
            }
        }
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    convocatoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'convocatorias',
            key: 'id'
        },
    },
    resultadoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'resultados',
            key: 'id'
        }
    },
}, {
    timestamps: false
});


// Exportamos el modelo de inscripciones
module.exports = Inscripcion;