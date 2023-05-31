const {Router} = require('express');

// Middleware de verificación de token
const verifyJWT = require('../middlewares/verifyJWT');

// Importamos las funciones del controlador
const userContoller = require('../controllers/userController');
// const fileUpload = require('express-fileupload');

// Inicializamos el router
const router = Router();

// Routes
router.post('/createS', verifyJWT, userContoller.createStudent);

router.get('/students', verifyJWT, userContoller.getStudents);

router.get('/student/:id', verifyJWT, userContoller.getStudentById);

router.put('/updateStudentS/:id', verifyJWT, userContoller.updateStudentForS);

router.put('/updateStudentD/:id', verifyJWT, userContoller.updateStudentForD);

router.get('/directors', verifyJWT, userContoller.getDirectors);

router.get('/director/:id', verifyJWT, userContoller.getDirectorById);

router.put('/updateDirector/:id', verifyJWT, userContoller.updateDirector);

router.put('/updatePhotoD/:id', userContoller.updatePhotoD);

// Importamos el router
module.exports = router;