const {logEvents} = require('./logger');


// Middleware encargado del manejo de errores
const errorHandler = (err, req, res, next) => {

    // Definimos el contenido del log
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log');

    console.log(err.stack);

    // Definimos el error a mostrar
    const status = res.statusCode ? res.statusCode : 500;

    res.status(status);

    res.json({message: err.message});

    next();

};


module.exports = {
    errorHandler
}