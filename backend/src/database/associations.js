// Importamos los modelos a asociar
const User = require('../models/Usuario');
const Rol = require('../models/Rol');
const Inscripcion = require('../models/Inscripcion');
const Convocatoria = require('../models/Convocatoria');
const Resultado = require('../models/Resultado');
const Prueba = require('../models/Prueba');
const Categoria = require('../models/Categoria');
const Pregunta = require('../models/Pregunta');
const ConfiguracionCategoria = require('../models/ConfiguracionCategoria');
const Competencia = require('../models/Competencia');
const PruebaCompetencia = require('../models/PruebaCompetencia');
const PreguntaPrueba = require('../models/PreguntaPrueba');

// Definimos la relación Usuario - Rol
Rol.hasMany(User);
User.belongsTo(Rol);

// Definimos la relación Usuario - Inscripcion
User.hasMany(Inscripcion);
Inscripcion.belongsTo(User);

// Definimos la relación Convocatoria - Inscripcion
Convocatoria.hasMany(Inscripcion);
Inscripcion.belongsTo(Convocatoria);

// Definimos la relación Resultado - Inscripcion
Resultado.hasOne(Inscripcion);
Inscripcion.belongsTo(Resultado);

// Definimos la relación Prueba - Convocatoria
Prueba.hasMany(Convocatoria);
Convocatoria.belongsTo(Prueba);

// Definimos la relación Categoria - Resultado
Categoria.hasMany(Resultado);
Resultado.belongsTo(Categoria);

// Definimos la relación Categoria - Pregunta
Categoria.hasMany(Pregunta);
Pregunta.belongsTo(Categoria);

// Definimos la relación Categoria - ConfiguracionCategoria
Categoria.hasMany(ConfiguracionCategoria);
ConfiguracionCategoria.belongsTo(Categoria);

// Definimos la relación Prueba - ConfiguracionCategoria
Prueba.hasMany(ConfiguracionCategoria);
ConfiguracionCategoria.belongsTo(Prueba);

// Definimos la relación Competencia - Categoria
Competencia.hasMany(Categoria);
Categoria.belongsTo(Competencia);

// Definimos la relación Competencia - Prueba
Competencia.belongsToMany(Prueba, {through: PruebaCompetencia});
Prueba.belongsToMany(Competencia, {through: PruebaCompetencia});

// Definimos la relación Prueba - Pregunta
Prueba.belongsToMany(Pregunta, {through: PreguntaPrueba});
Pregunta.belongsToMany(Prueba, {through: PreguntaPrueba});