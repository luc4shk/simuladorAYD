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

// Definimos la relación Categoria - Resultado
Categoria.hasMany(Resultado);
Resultado.belongsTo(Categoria);

// Definimos la relación Categoria - Pregunta
Categoria.hasMany(Pregunta);
Pregunta.belongsTo(Categoria);

// Definimos la relación Categoria - ConfiguracionCategoria
Categoria.hasMany(ConfiguracionCategoria);
ConfiguracionCategoria.belongsTo(Categoria);

// Definimos la relación Competencia - Categoria
Competencia.hasMany(Categoria);
Categoria.belongsTo(Competencia);

// Definimos la relación Competencia - PruebaCompetencia
Competencia.hasMany(PruebaCompetencia);
PruebaCompetencia.belongsTo(Competencia);

