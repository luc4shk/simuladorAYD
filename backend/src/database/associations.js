// Importamos los modelos a asociar
const User = require('../models/Usuario');
const Rol = require('../models/Rol');
const Inscripcion = require('../models/Inscripcion');

// Definimos la relación Usuario - Rol
Rol.hasMany(User);
User.belongsTo(Rol);

// Definimos la relación Usuario - Inscripcion
User.hasMany(Inscripcion);
Inscripcion.belongsTo(User);