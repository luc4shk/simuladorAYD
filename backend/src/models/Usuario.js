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
        allowNull: false,
        validate: {
            len:{
                args: [5, 25],
                msg: "El nombre solo ha de contener entre 5 y 25 caracteres"
            }
        }
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [5, 35],
                msg: "El apellido solo ha de contener entre 5 y 35 caracteres"
            }
        }
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
            name: 'users_code',
            msg: "El código propocionado ya existe"
        },
        validate:{
            isNumeric: {
                msg: "El código solo ha de contener números"
            },
            len: {
                args: 7,
                msg: "El código solo puede contener 7 digitos"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            name: 'users_email',
            msg: "El email proporcionado ya ha sido registrado"
        },
        validate:{
            isEmail: {
                args: true,
                msg: "El correo debe corresponder con una dirección válida"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [10, 65],
                msg: "La contraseña debe de tener 10 caracteres minimo"
            }
        }
    },
    tipo: {
        type: DataTypes.ENUM('director', 'estudiante'),
        allowNull: false
    },
    // Director data
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: {
                msg: "El telefono solo ha de contener números"
            },
            len: {
                args: 7,
                msg: "El telefono solo puede contener 7 digitos"
            }
        }
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [20, 60],
                msg: "La dirección ha de tener entre 20 y 60 caracteres"
            }
        }
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: {
            name: 'directors_document',
            msg: "Document already registered"
        },
        validate: {
            isNumeric: {
                msg: "El documento solo ha de contener números"
            },
            len: {
                args: 10,
                msg: "El documento solo puede contener 10 digitos"
            }
        }
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: {
                msg: "El celular solo ha de contener números"
            },
            len: {
                args: 10,
                msg: "El celular solo puede contener 10 digitos"
            }
        }
    },
    foto_perfil: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Student data
    semestre: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isNumeric: {
                msg: "El semestre solo ha de contener números"
            },
            len: {
                args: 1,
                msg: "El semestre solo puede contener 1 digito"
            }
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    rol_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: false
});

// Función encargada de la validación de la contraseña
/*User.prototype.validatePassword = function (receivedPasswd, passwd) {
    return bcrypt.compare(receivedPasswd, passwd);
}*/

// Exportamos el modelo
module.exports = User;
