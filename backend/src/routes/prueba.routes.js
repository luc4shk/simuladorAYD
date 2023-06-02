const {Router} = require('express');

// Importamos las funciones del controlador
const pruebaController = require('../controllers/pruebaController');

// Importamos los middlewares de autenticación
const authJWT = require('../middlewares/verifyJWT');
const isAdmin = require('../middlewares/isAdmin');

// Inicializamos el router
const router = Router();


// Routes

// @desc Endpoint encargado de la obtención de todas las categorias activas
// @route GET /api/categeoira
// @access solo Admin
router.get('/', [authJWT, isAdmin], pruebaController.getPruebas);

router.get('/:id', [authJWT, isAdmin], pruebaController.getPruebasId);

router.post('/create', [authJWT, isAdmin], pruebaController.createPrueba);



// Exportamos el router
module.exports = router;