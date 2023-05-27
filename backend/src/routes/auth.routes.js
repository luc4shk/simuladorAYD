const {Router} = require('express');

// Importamos las funciones del controlador
const authController = require('../controllers/authController');

// Middlewares
const verifyJWT = require('../middlewares/verifyJWT');

// Inicializamos el router
const router = Router();

// Routes
router.post('/login', authController.login);

router.get('/refresh', verifyJWT, authController.refresh);

router.post('/logout', verifyJWT, authController.logout);

// Exportamos el router
module.exports = router;