const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { username } = require('../config');


// @desc Endpoint encargado de la administración del Login de usuario
// @route POST /auth
// @access public
const login = async (req, res) => {

    try{

        // Obtenemos las credenciales del usuario
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: 'Todos los campos son requeridos'});
        }

        // Verificamos la existencia del usuario
        const userFound = await Usuario.findOne({email});

        if(!userFound || !userFound.estado){
            return res.status(401).json({message: 'Acceso no autorizado'});
        }

        // Comprobamos la contraseña
        const match = bcrypt.compare(password, userFound.password);

        if(!match){
            return res.status(401).json({message: 'Acceso no autorizado'});
        }

        // Creamos el token de acceso
        

    }catch(error){

    }

};