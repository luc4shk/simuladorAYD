const Competencia = require('../models/Competencia');

// @desc Endpoint encargado de la obtención de todas las competencias activas
// @route POST /api/competencia
// @access solo Admin
const getCompetencias = async (req, res) => {

    try{

        // Obtenemos las competencias
        const competencias = await Competencia.findAll({
            where: {estado: true}
        });

        // Respondemos al usuario
        res.status(200).json(competencias);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


// @desc Endpoint encargado de la obtención de una competencia por id
// @route POST /api/competencia/:id
// @access solo Admin
const getCompetenciaById = async (req, res) => {

    try{

        // Obtenemos el id de la competencia a obtener
        const {id} = req.params;

        // Verificamos los datos de entrada
        const regex = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regex.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos y verificamos la competencia
        const competencia = await Competencia.findByPk(id, {
            attributes: ['nombre', 'descripcion', 'estado']
        });

        if(!competencia){
            return res.status(400).json({error: 'No se encuentra ninguna competencia con el id especificado'});
        }

        // Respondemos al usuario
        res.status(200).json(competencia);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


// @desc Endpoint encargado de la creación de una competencia
// @route POST /api/competencia/create
// @access solo Admin
const createCompetencia = async (req, res) => {

    try{

        // Obtenemos los datos de la competencia a crear
        const {nombre, descripcion} = req.body;

        // Validamos los datos obtenidos
        if(!nombre || !descripcion){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }

        if(typeof nombre !== 'string' || typeof descripcion !== 'string'){
            return res.status(400).json({error: 'El nombre y la descripción deben ser texto'});
        }

        const regex = /^[a-zA-Z\s]*$/; // Expresión regular que controla solo la admición de caracteres comunes

        if(!regex.test(nombre) || !regex.test(descripcion)){
            return res.status(400).json({error: 'El nombre y la descripción no pueden contener números o caracteres especiales'});
        }

        // Comprobamos que el nombre sea unico 
        const compFound = await Competencia.findOne({
            where: {
                nombre
            }
        });

        if(compFound){
            return res.status(400).json({error: "El nombre de la competencia debe ser unico"});
        }

        // Creamos la competencia
        const competencia = await Competencia.create({
            nombre,
            descripcion
        });

        // Respondemos al usuario
        res.status(200).json(competencia);

    }catch(err){
        res.status(500).json({err: err.message});
    }

};

// @desc Endpoint encargado de la actualización de una competencia
// @route POST /api/competencia/update/:id
// @access solo Admin
const updateCompetencia = async (req, res) => {

    try{

        // Obtenemos el id de la competencia a actualizar
        const {id} = req.params;

        // Verificamos los datos de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos y verificamos la competencia
        const competencia = await Competencia.findByPk(id);
        
        if(!competencia){
            return res.status(400).json({error: 'No se encuentra ninguna competencia con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {nombre, descripcion, estado} = req.body;

        // Validamos los datos obtenidos
        if(typeof nombre !== 'string' || typeof descripcion !== 'string' || typeof estado !== 'boolean'){
            return res.status(400).json({error: 'Los tipos de datos no coinciden'});
        }

        const regex = /^[a-zA-Z\s]*$/; // Expresión regular que controla solo la admición de caracteres comunes

        if(!regex.test(nombre) || !regex.test(descripcion)){
            return res.status(400).json({error: 'El nombre y la descripción no pueden contener números o caracteres especiales'});
        }

        // Comprobamos que el nombre sea unico 
        const compFound = await Competencia.findOne({
            where: {
                nombre
            }
        });

        if(compFound && competencia.nombre.toLowerCase() !== compFound.nombre.toLowerCase()){
            return res.status(400).json({error: "El nombre de la competencia debe ser unico"});
        }

        // Actualizamos la competencia
        competencia.update({
            nombre,
            descripcion,
            estado
        });

        // Respondemos al usuario
        res.status(200).json(competencia);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


module.exports = {
    getCompetencias,
    getCompetenciaById,
    createCompetencia,
    updateCompetencia
}