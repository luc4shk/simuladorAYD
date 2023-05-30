const {Sequelize} = require('sequelize');
const {database, password, username, host} = require('../config');


// Creamos la instancia de conexión
const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'mysql',
    port: 3607
});


// Exportamos el objeto de conexión
module.exports = sequelize;
