const express = require('express');
const {logger, logEvents} = require('./middlewares/logger');
const {errorHandler} = require('./middlewares/errorHandler');
const sequelize = require('./database/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./util/corsOptions');

// Importamos las tablas a crear
require('./database/associations');

// Importar Rutas de la API
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

// Inicializar el contexto principal
const app = express();

// Puerto de escucha del servidor
const PORT = process.env.PORT || 3500;


// Middlwares
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


// En caso de acceder a una ruta no especificada
app.all('*', (req, res) => {

    res.status(404);

    if(req.accepts('json')){
        res.json({message: "404 Not Found"});
    }else{
        res.type('txt').send('404 Not Found');
    }

});

// Middleware de manejo de errores
app.use(errorHandler);


// Corremos el servidor
sequelize.sync({force: true}).then(() => {
    console.log('Connected to ufps_pro');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'databaseErrLog.log');
});
