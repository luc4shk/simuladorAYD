const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// @desc Endpoint encargado de la administración del Login de usuario
// @route POST /api/auth
// @access public
const login = async (req, res) => {

    try{

        // Obtenemos las credenciales del usuario
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: 'Todos los campos son requeridos'});
        }

        // Verificamos la existencia del usuario
        const userFound = await Usuario.findOne({
            where: {
                email
            }
        });

        if(!userFound || !userFound.estado){
            return res.status(401).json({message: 'Credenciales incorrectas'});
        }

        // Comprobamos la contraseña
        const match = await bcrypt.compare(password, userFound.password);

        if(!match){
            return res.status(401).json({message: 'Credenciales incorrectas'});
        }

        // Creamos el token de acceso
        const accessToken = jwt.sign({
            username: email,
            tipo: userFound.tipo
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'});

        // Creamos el token de refresco
        const refreshToken = jwt.sign(
            {
                username: email,
                tipo: userFound.tipo
            },
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        // Creamos una cookie para almacenar el token de refresco
        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 24 * 60 * 1000
        });

        // Obtnemos el rol del usuario
        const userRole = await Rol.findByPk(userFound.rol_id);

        // Enviamos el token de acceso al usuario
        res.json({
            username: email,
            name: userFound.nombre,
            role: userRole.nombre,
            accessToken
        });

    }catch(error){
        res.status(500).json({message: error.message});
    }

};

// @desc Enpoint encargado de realizar el refresco del token de acceso
// @route GET /api/auth/refresh
// @access public - token de refresco expirado
const refresh = async (req, res) => {

    // Recuperamos la cookie
    const cookies = req.cookies;

    if(!cookies?.jwt){
        return res.status(401).json({message: 'Acceso no autorizado'});
    }

    // Obtenemos el token de refresco
    const refreshToken = cookies.jwt;

    // Verificamos el token
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {

            if(err) return res.status(403).json({message: 'Acceso prohibido'});

            // Verificamos los datos del payload
            const foundUser = Usuario.findOne({
                where: {
                    email: user.username
                }
            });

            if(!foundUser) return res.status(401).json({ message: 'Acceso no autorizado' });

            // Volvemos a crar el token de acceso
            const accessToken = jwt.sign(
                {
                    username: foundUser.email,
                    tipo: foundUser.tipo
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '15m'}
            );

            res.status(200).json({accessToken});

        }
    );

};

// @desc Enpoint encargado de gestionar el cierre de sesión
// @route GET /api/auth/logout
// @access public 
const logout = (req, res) => {

    // Obtengo las cookies
    const cookies = req.cookies;

    // Verfico que la cookie que almacena el token de refresco existe
    if(!cookies?.jwt){
        return res.status(401).json({message: 'Acceso no autorizado'});
    }

    // Elimino la cookie
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'Lax', secure: false });

    res.json({message: 'Sesión terminada correctamente!'});

};

module.exports = {
    login,
    refresh,
    logout
}