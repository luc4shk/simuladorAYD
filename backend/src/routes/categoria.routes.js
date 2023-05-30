const {Router} = require('express');

// Importamos las funciones del controlador
const categoriaController = require('../controllers/categoriaController');

// Importamos los middlewares de autenticación
const authJWT = require('../middlewares/verifyJWT');
const isAdmin = require('../middlewares/isAdmin');

// Inicializamos el router
const router = Router();


// Rutas
router.get('/', [authJWT, isAdmin], categoriaController.getCategorias);

router.get('/:id', [authJWT, isAdmin], categoriaController.getCategoriaById);

router.post('/create', [authJWT, isAdmin], categoriaController.createCategoria);

router.put('/update/:id', [authJWT, isAdmin], categoriaController.updateCategoria);

// Exportamos el router
module.exports = router;