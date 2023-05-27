const jwt = require('jsonwebtoken');

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

            next();

        }
    );

};


module.exports = verifyJWT;