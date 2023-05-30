const Usuario = require('../models/Usuario');

getStudents =  async (req, res) => {
    try {
        const students = await Usuario.findAll({
            where: {tipo: 'estudiante'}
        })
        res.json(students);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Usuario.findByPk(id);
        res.json(students);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getStudents,
    getStudentById
}