const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const verifyJWT = (req, res, next) => {

    // Obtenemos el encabezado de autorización
    const authHeader = req.headers.authorization || req.headers.Authorization;

    // Verificar el contenido
    if(!authHeader?.startsWith('Bearer')) {
        return res.status(401).json({message: 'Accceso no autorizado'});
    }

    // Obtenemos el token de acceso
    const token = authHeader.split(' ')[1];

    // Verificamos el token
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, user) => {

            if(err) {
                return res.status(403).json({message: 'Accceso prohibido'});
            }

            // Verificamos los datos del payload
            const foundUser = Usuario.findOne({
                where: {
                    email: user.username
                }
            });

            if(!foundUser) return res.status(401).json({ message: 'Acceso no autorizado' });

            req.user = user;
            next();

        }
    );

};


module.exports = verifyJWT;