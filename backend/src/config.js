const {config} = require('dotenv');

config();

// Configuración de la base de datos
module.exports = {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: "localhost"
}