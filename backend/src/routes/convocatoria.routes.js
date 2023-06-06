const {Router} = require('express');

// Importamos las funciones del controlador
const convocatoriaController = require('../controllers/convocatoriaController');

// Importamos los middlewares de autenticación
const authJWT = require('../middlewares/verifyJWT');
const isAdmin = require('../middlewares/isAdmin');
const fileupload = require('express-fileupload');

// Inicializamos el router
const router = Router();


// Routes

// @desc Endpoint encargado de la obtención de todas las convocatorias activas
// @route GET /api/convocatoria
// @access solo Admin
router.get('/', [authJWT, isAdmin], convocatoriaController.getConvocatorias);


// @desc Endpoint encargado de la obtención de una convocatoria por su id
// @route GET /api/convocatoria/:id
// @access solo Admin
router.get('/:id', [authJWT, isAdmin], convocatoriaController.getConvocatoriaById);


// @desc Endpoint encargado de la creación de una nueva convocatoria
// @route POST /api/convocatoria/create
// @access solo Admin
router.post('/create', [authJWT, isAdmin, fileupload()], convocatoriaController.createConvocatoria);


// @desc Endpoint encargado de la actualización de una convocatoria por su od
// @route PUT /api/convocatoria/update/:id
// @access solo Admin
//router.put('/update/:id', [authJWT, isAdmin], convocatoriaController);


module.exports = router;