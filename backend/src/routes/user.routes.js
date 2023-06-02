const {Router} = require('express');

// Middleware de verificación de token
const verifyJWT = require('../middlewares/verifyJWT');
const isAdmin = require('../middlewares/isAdmin');

// Importamos las funciones del controlador
const userContoller = require('../controllers/userController');

// Inicializamos el router
const router = Router();


// Routes

// @desc Endpoint encargado de la creación de un nuevo estudiante
// @route POST /api/user/student/create
// @access solo Admin
router.post('/student/create', [verifyJWT, isAdmin], userContoller.createStudent);


// @desc Endpoint encargado de la obtención de todos los estudiantes activos
// @route GET /api/user/student
// @access solo Admin
router.get('/student', [verifyJWT, isAdmin], userContoller.getStudents);


// @desc Endpoint encargado de la obtención de un solo estudiante por su id
// @route GET /api/user/student/:id
// @access Estudiante
router.get('/student/:id', verifyJWT, userContoller.getStudentById);


// @desc Endpoint encargado de la actualización de los datos de contacto de un estudiante por el mismo a partir de su id
// @route PUT /api/user/student/update/:id
// @access Estudiante
router.put('/student/update/:id', verifyJWT, userContoller.updateStudentData);


// @desc Endpoint encargado de la actualización de datos de un estudiante por parte del director
// @route PUT /api/user/student/updateDir/:id
// @access solo Admin
router.put('/student/updateDir/:id', [verifyJWT, isAdmin], userContoller.updateStudentDataDir);


// @desc Endpoint encargado de la obtención de todos los directores registrados (incluidos no activos)
// @route GET /api/user/admin
// @access solo Admin
router.get('/admin', [verifyJWT, isAdmin], userContoller.getDirectors);


// @desc Endpoint encargado de la obtención de un unico director por su id
// @route GET /api/user/admin/:id
// @access solo Admin
router.get('/admin/:id', [verifyJWT, isAdmin], userContoller.getDirectorById);


// @desc Endpoint encargado de la actualización de los datos del director
// @route PUT /api/user/admin/update/:id
// @access solo Admin
router.put('/admin/update/:id', [verifyJWT, isAdmin], userContoller.updateDirector);


// Storage de multer

// @desc Endpoint encargado de la actualización de la foto de perfil del director
// @route PUT /api/user/admin/updatePhoto/:id
// @access solo Admin
router.put('/updatePhotoD/:id', [verifyJWT, isAdmin], userContoller.updatePhotoDirector);


// Importamos el router
module.exports = router;