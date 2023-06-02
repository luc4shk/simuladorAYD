const Prueba = require('../models/Prueba');
const Competencia = require('../models/Competencia');
const PruebaCompetencia = require('../models/PruebaCompetencia');

getPruebas = async (req, res) => {

    try{

        // Obtenemos todas las pruebas registradas en la BD
        const pruebas = await Prueba.findAll({
            where: {
                estado: true
            },
            attributes: ['nombre', 'semestre'],
            include: {
                model: Competencia,
                attributes: ['nombre']
            }
        });

        // Respondemos al usuario
        res.status(200).json(pruebas)

    }catch(err){
        res.status(500).json({err: err.message});
    }

};


getPruebasId = async (req, res) => {

    try{

        //Obtenemos el id del estudiante
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos la prueba y verificamos su existencia
        const prueba = await Prueba.findByPk(id, {
            include: {
                model: Competencia,
                attributes: ['nombre']
            }
        });

        if(!prueba){
            return res.status(400).json({error: 'No se encontro ninguna prueba con el id especificado'});
        }

        // Respondemos al usuario
        res.status(200).json(prueba);

    }catch(err){
        res.status(500).json({error: err.message});
    }

};


createPrueba = async (req, res) => {

    try{

        // Obtenemos los datos de el estudiante a crear
        const {nombre, descripcion, semestre, duracion, competencias, total_preguntas, valoresGenericas, valoresEspecificas} = req.body;

        // Validamos los datos obtenidos

        const regexNum = /^[0-9]*$/;
        const regexData = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

        // [{1: [12, 23]}, { }, {}, {}, {}]
        if(!Array.isArray(competencias) || competencias.length === 0 || !regexData.test(nombre) || !regexNum.test(semestre) || 
            !regexNum.test(duracion) || !regexNum.test(total_preguntas)){
            return res.status(400).json({error: 'La sintaxis de los datos es incorrecta'});
        }

        // Creamos la prueba
        const prueba = await Prueba.create({
            nombre,
            descripcion,
            semestre,
            duracion,
            total_preguntas
        });

        // Obtenemos los objetos competencias

        const competencias_obj = [];

        for (const competencia_id of competencias) {

            await PruebaCompetencia.create({
                prueba_id: prueba.id,
                competencia_id
            });

            const competencia = await Competencia.findByPk(competencia_id);
            competencias_obj.push(competencia);
        }

        res.status(200).json(competencias_obj);

        /*if(valoresGenericas || valoresGenericas.length > 0){

        }*/


    }catch(err){
        res.status(500).json({error: err.message});
    }

};


module.exports = {
    getPruebas,
    getPruebasId, 
    createPrueba
}