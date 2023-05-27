const {Router} = require('express');
const Usuario = require('../models/Usuario');

// Inicializamos el router
const router = Router();

// Routes
router.get('/students', async (req, res) => {
    try {
        const students = await Usuario.findAll({
            where: {tipo: 'estudiante'}
        })
        res.json(students);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Usuario.findByPk(id);
        res.json(students);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Importamos el router
module.exports = router;