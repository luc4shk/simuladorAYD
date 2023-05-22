const {DataTypes} = require('sequelize');
//const bcrypt = require('bcrypt');

// Importamos el objeto de conexión
const sequelize = require('../database/db');


// Creamos el esquema del modelo
const User = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
            name: 'users_code',
            mdsg: "Code already registered"
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'users_email',
            msg: "Email already in use"
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('director', 'estudiante'),
        allowNull: false
    },
    // Director data
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: {
            name: 'directors_document',
            msg: "Document already registered"
        }
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true
    },
    foto_perfil: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Student data
    semestre: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
});

// Función encargada de la validación de la contraseña
/*User.prototype.validatePassword = function (receivedPasswd, passwd) {
    return bcrypt.compare(receivedPasswd, passwd);
}*/

// Exportamos el modelo
module.exports = User;
