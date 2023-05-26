const {Router} = require('express');

// Inicializamos el router
const router = Router();

// Routes 
router.get('/students', (req, res) => {});

router.get('/students/:id', (req, res) => {});

// Importamos el router
module.exports = router;