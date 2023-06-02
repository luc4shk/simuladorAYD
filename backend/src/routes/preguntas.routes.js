const {Router} = require('express');
const path = require('path');
const multer = require('multer');

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

// Storage de multer
const multerStorage = multer.diskStorage({

    destination: (req, file, cb) => {

        const filePath = path.resolve(__dirname, '../public/questions');
        cb(null, filePath);

    },
    filename: (req, file, cb) => {

        // Obtenemos la extensión del archivo
        const fileExtension = path.extname(file.originalname); 

        // Creamos el nombre del archivo 
        const mili = Date.now();
        const fileName = `pregunta-${mili}${fileExtension}`;
        cb(null, fileName);

    }

});
const upload = multer({
    storage: multerStorage,
    fileFilter: (req, file, cb) => {

        const mymetypes = ["image/jpeg", "image/png"];

        if(mymetypes.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(new Error(`Solo se admiten los siguientes mymetypes: ${mymetypes.join(' ')}`), false);
        }

    },
    limits: {
        fileSize: 4 * 1024 * 1024
    }
});

// @desc Endpoint encargada de la creación de una pregunta con imagen
// @route POST /api/question/createImageQuestion
// @access solo Admin
router.post('/createImageQuestion', [verifyJWT, isAdmin, upload.single("imagen")], questionController.createImageQuestion);


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