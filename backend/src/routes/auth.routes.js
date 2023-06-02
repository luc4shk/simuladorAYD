const {Router} = require('express');

// Importamos las funciones del controlador
const authController = require('../controllers/authController');

// Middlewares
const verifyJWT = require('../middlewares/verifyJWT');

// Inicializamos el router
const router = Router();


// Routes

// @desc Endpoint encargado de la administración del Login de usuario
// @route POST /api/auth
// @access public
router.post('/login', authController.login);


// @desc Enpoint encargado de realizar el refresco del token de acceso
// @route GET /api/auth/refresh
// @access public - token de refresco expirado
router.get('/refresh', authController.refresh);


// @desc Enpoint encargado de gestionar el cierre de sesión
// @route POST /api/auth/logout
// @access public 
router.post('/logout', verifyJWT, authController.logout);

// Exportamos el router
module.exports = router;