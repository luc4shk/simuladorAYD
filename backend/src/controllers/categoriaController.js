const Categoria = require('../models/Categoria');
const Competencia = require('../models/Competencia');

// @desc Endpoint encargado de la obtención de todas las categorias activas
// @route GET /api/categeoira
// @access solo Admin
const getCategorias = async (req, res) => {

    try{

        // Obtenemos las categorias
        const categorias = await Categoria.findAll({
            where: {estado: true},
            attributes: ['id', 'nombre', 'descripcion'],
            include: {
                model: Competencia,
                attributes: ['nombre']
            }
        });

        // Respondemos al usuario
        res.status(200).json(categorias);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


// @desc Endpoint encargado de la obtención de una categoria por Id
// @route GET /api/categoria/:id
// @access solo Admin
const getCategoriaById = async (req, res) => {

    try{

        // Obtenemos el id de la categoria a obtener
        const {id} = req.params;

        // Verificamos los datos de entrada
        const regex = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regex.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos y verificamos la categoria
        const categoria = await Categoria.findByPk(id, {
            attributes: ['nombre', 'descripcion', 'estado'],
            include: {
                model: Competencia,
                attributes: ['nombre']
            }
        });

        if(!categoria){
            return res.status(400).json({error: 'No se encuentra ninguna categoria con el id especificado'});
        }

        // Respondemos al usuario
        res.status(200).json(categoria);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


// @desc Endpoint encargado de la creación de una categoria
// @route POST /api/categoria/create
// @access solo Admin
const createCategoria = async (req, res) => {

    try{

        // Obtenemos los datos de la categoria a crear
        const {nombre, descripcion, competencia_id} = req.body;

        // Validamos los datos obtenidos
        if(!nombre || !descripcion || !competencia_id){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }

        if(typeof nombre !== 'string' || typeof descripcion !== 'string'){
            return res.status(400).json({error: 'El nombre y la descripción deben ser texto'});
        }

        const regex = /^[a-zA-Z\s]*$/; // Expresión regular que controla solo la admición de caracteres comunes

        if(!regex.test(nombre) || !regex.test(descripcion)){
            return res.status(400).json({error: 'El nombre y la descripción no pueden contener números o caracteres especiales'});
        }

        // Comprobamos que el nombre de la categoria sea unico 
        const categoriaExist = await Categoria.findOne({
            where: {
                nombre
            }
        });

        if(categoriaExist){
            return res.status(400).json({error: "El nombre de la categoria debe ser unico"});
        }

        // Comprobamos que el id de la competencia corresponda a uno válido
        const competencia_exist = await Competencia.findByPk(competencia_id);
        
        if(!competencia_exist){
            return res.status(400).json({error: 'El id proporcionado no corresponde con una competencia existente'});
        }

        // Creamos la competencia
        const categoria = await Categoria.create({
            nombre,
            descripcion,
            competencia_id
        });

        // Respondemos al usuario
        res.status(200).json(categoria);

    }catch(err){
        res.status(500).json({err: err.message});
    }

};


// @desc Endpoint encargado de la actualización de una categoria dado su id 
// @route PUT /api/categoria/update/:id
// @access solo Admin
const updateCategoria = async (req, res) => {

    try{

        // Obtenemos el id de la categoria a actualizar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos y verificamos la categoria
        const categoria = await Categoria.findByPk(id);
        
        if(!categoria){
            return res.status(400).json({error: 'No se encuentra ninguna categoria con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {nombre, descripcion, estado, competencia_id} = req.body;

        // Validamos los datos
        const regexData = /^[a-zA-Z\s]*$/;

        if(!regexData.test(nombre) || !regexData.test(descripcion) || !regexId.test(competencia_id)){
            return res.status(400).json({error: 'La sintaxis de los datos ingresados es incorrecta'});
        }

        // Comprobamos que el nombre sea unico 
        const categoriaExist = await Categoria.findOne({
            where: {
                nombre
            }
        });

        if(categoriaExist && categoriaExist.nombre.toLowerCase() !== categoria.nombre.toLowerCase()){
            return res.status(400).json({error: "El nombre de la categoria debe ser unico"});
        }

        // Comprobamos que el id de la competencia corresponda a uno válido
        const competencia_exist = await Competencia.findByPk(competencia_id);
        
        if(!competencia_exist){
            return res.status(400).json({error: 'El id proporcionado no corresponde con una competencia existente'});
        }

        // Actualizamos la categoria
        categoria.update({
            nombre,
            descripcion,
            estado,
            competencia_id
        });

        // Respondemos al usuario
        res.status(200).json(categoria);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


module.exports = {
    getCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria
}