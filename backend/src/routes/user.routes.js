const {Router} = require('express');

// Middleware de verificación de token
const verifyJWT = require('../middlewares/verifyJWT');

// Importamos las funciones del controladro
const userContoller = require('../controllers/userController');

// Inicializamos el router
const router = Router();

// Routes
router.get('/students', verifyJWT, userContoller.getStudents);

router.get('/students/:id', verifyJWT, userContoller.getStudentById);

// Importamos el router
module.exports = router;