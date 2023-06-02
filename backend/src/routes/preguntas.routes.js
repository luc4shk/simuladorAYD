const {Router} = require('express');

// Middleware
const fileupload = require('express-fileupload');
const verifyJWT = require('../middlewares/verifyJWT');
const isAdmin = require('../middlewares/isAdmin');

// Importamos las funciones del controlador
const questionController = require('../controllers/questionController');

// Inicializamos el router
const router = Router();


// Rutas

// @desc Endpoint encargada de mostrar todas las preguntas almacenadas que esten activas
// @route GET /api/question
// @access solo Admin
router.get('/', [verifyJWT, isAdmin], questionController.getAllQuestions);


// @desc Endpoint encargada de la creación de una nueva pregunta
// @route POST /api/question/create
// @access solo Admin
router.post('/create', [verifyJWT, isAdmin, fileupload()], questionController.createQuestion);


// @desc Endpoint encargado de la obtención de una pregunta por su id
// @route GET /api/question/:id
// @access solo Admin
router.get('/:id', [verifyJWT, isAdmin], questionController.getQuestionById);


// @desc Endpoint encargado de la actualización de una pregunta por su id
// @route PUT /api/question/update/:id
// @access solo Admin
router.put('/update/:id', [verifyJWT, isAdmin], questionController.actualizarPregunta);


// Importamos el router
module.exports = router;