const {Router} = require('express');

// Middleware
const fileupload = require('express-fileupload');

// Importamos las funciones del controlador
const questionController = require('../controllers/questionController');

// Inicializamos el router
const router = Router();


// Rutas
router.get('/', questionController.getAllQuestions);

router.post('/create', fileupload(), questionController.createQuestion);

router.get('/:id', );

router.put('/edit/:id', );


// Importamos el router
module.exports = router;