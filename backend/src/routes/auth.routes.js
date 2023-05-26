const {Router} = require('express');

// Importamos las funciones del controlador


// Inicializamos el router
const router = Router();

// Routes
router.post('/login');

router.get('/refresh');

router.post('/logout');

// Exportamos el router
module.exports = router;