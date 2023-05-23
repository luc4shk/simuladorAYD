const {DATATYPES} = require('sequelize');

//Importamos el modelo de conexión
const sequelize = require('../database/db');

const ConfiguracionCategoria = sequelize.define('configuracionCategorias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidad_preguntas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: "La cantidad de preguntas solo puede contener números"
            },
            len: {
                args: [1, 100],
                msg: "La cantidad de preguntas por categoria debe ser minímo 1"
            }
        }
    },
    valor_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: "El valor de la categoría solo puede contener números"
            },
            len: {
                args: [1, 100],
                msg: "El valor de la categoría en la competencia debe ser minímo 1%"
            }
        }
    },
    prueba_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Prueba',
            key: 'id'
        }
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria',
            key: 'id'
        }
    }
});

module.exports = ConfiguracionCategoria;