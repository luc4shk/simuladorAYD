const {DataTypes} = require('sequelize');

//Importamos el objeto de conexión
const sequelize = require('../database/db');


// Creamos el esquema del modelo
const PruebaCompetencia = sequelize.define('prueba_competencia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pruebaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pruebas',
            key: 'id'
        }
    },
    competenciaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'competencias',
            key: 'id'
        }
    }
});

// Exportamos el modelo
module.exports = PruebaCompetencia;