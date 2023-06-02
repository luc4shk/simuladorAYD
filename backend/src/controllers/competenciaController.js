const Competencia = require('../models/Competencia');
const Categoria = require('../models/Categoria');

const getCompetencias = async (req, res) => {

    try{

        // Obtenemos las competencias
        const competencias = await Competencia.findAll({
            where: {estado: true},
            attributes: ['nombre', 'descripcion', 'estado'],
            include: {
                model: Categoria,
                attributes: ['id', 'nombre']
            }
        });

        // Respondemos al usuario
        res.status(200).json(competencias);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


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
            include: {
                model: Categoria,
                attributes: ['id', 'nombre']
            }
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

        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; // Expresión regular que controla solo la admición de caracteres comunes

        if(!regex.test(nombre)){
            return res.status(400).json({error: 'El nombre no puede contener números o caracteres especiales'});
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
            nombre: nombre.toUpperCase(),
            descripcion
        });

        // Respondemos al usuario
        res.status(200).json(competencia);

    }catch(err){
        res.status(500).json({err: err.message});
    }

};


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

        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; // Expresión regular que controla solo la admición de caracteres comunes

        if(!regex.test(nombre)){
            return res.status(400).json({error: 'El nombre no puede contener números o caracteres especiales'});
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
        await competencia.update({
            nombre: nombre.toUpperCase(),
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