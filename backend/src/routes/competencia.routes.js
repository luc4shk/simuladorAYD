const {Router} = require('express');

// Importamos las funciones del controlador
const competenciaController = require('../controllers/competenciaController');

// Importamos los middlewares de autenticación
const authJWT = require('../middlewares/verifyJWT');
const isAdmin = require('../middlewares/isAdmin');

// Inicializamos el router
const router = Router();


// Rutas
router.get('/', [authJWT, isAdmin], competenciaController.getCompetencias);

router.get('/:id', [authJWT, isAdmin], competenciaController.getCompetenciaById);

router.post('/create', [authJWT, isAdmin], competenciaController.createCompetencia);

router.put('/update/:id', [authJWT, isAdmin], competenciaController.updateCompetencia);

// Exportamos el router
module.exports = router;