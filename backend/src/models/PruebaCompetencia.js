const {DATATYPES} = require('sequelize');

//Importamos el modelo de conexión
const sequelize = require('../database/db');

const PruebaCompetencia = sequelize.define('pruebaCompetencias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    prueba_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Prueba',
            key: 'id'
        }
    },
    competencia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Competencia',
            key: 'id'
        }
    }
});

module.exports = PruebaCompetencia;