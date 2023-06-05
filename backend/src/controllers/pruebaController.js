const Prueba = require('../models/Prueba');
const Competencia = require('../models/Competencia');
const PruebaCompetencia = require('../models/PruebaCompetencia');
const ConfiguracionCategoria = require('../models/ConfiguracionCategoria');
const Pregunta = require('../models/Pregunta');
const Categoria = require('../models/Categoria');


/* --------- getPruebas function -------------- */

getPruebas = async (req, res) => {

    try{

        // Obtenemos todas las pruebas registradas en la BD
        const pruebas = await Prueba.findAll({
            where: {
                estado: true
            },
            attributes: ['id', 'nombre', 'semestre'],
            include: {
                model: Competencia,
                attributes: ['nombre']
            }
        });

        // Respondemos al usuario
        res.status(200).json(pruebas)

    }catch(err){
        return res.status(500).json({error: `Error al obtener las pruebas ${err.message}`});
    }

};


/* --------- getPruebasId function -------------- */

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
        return res.status(500).json({error: `Error al obtener la información de la prueba: ${err.message}`});
    }

};


/* --------- createPrueba function -------------- */

createPrueba = async (req, res) => {

    try{

        // Obtenemos los datos de el estudiante a crear
        const {nombre, descripcion, semestre, duracion, competencias, total_preguntas, valoresGenericas, valoresEspecificas} = req.body;

        // Validamos los datos obtenidos

        const regexNum = /^[0-9]*$/;
        const regexData = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

        if(!Array.isArray(competencias) || competencias.length === 0 || !regexData.test(nombre) || !regexNum.test(semestre) || 
            !regexNum.test(duracion) || !regexNum.test(total_preguntas)){
            return res.status(400).json({error: 'La sintaxis de los datos es incorrecta'});
        }

        // Variables de control para la cantidad de preguntas y valor por categoría
        let total_preguntas_categorias = 0;
        let valor_total_categorias = 0;

        // Validamos que los datos ingresados para las categotrias 
        // de la competencia generica sean correctos (si aplica)
        if(valoresGenericas && valoresGenericas.length > 0){

            for(const categoria_config of valoresGenericas){

                // Obtenemos el id de la categoria actual
                const preguntas_categoria = categoria_config[1];
                const valor_categoria = categoria_config[2];

                // Primero validamos que la cantidad de preguntas por categoria
                // NO supere el total de preguntas
                if(preguntas_categoria > total_preguntas){
                    return res.status(400).json({error: 'La cantidad de preguntas por categoria no puede superar al total de preguntas de la prueba'});
                }

                // Luego validamos que el porcentaje por cada categoria
                // NO supere el total (100%)
                if(valor_categoria > 100){
                    return res.status(400).json({error: 'El valor porcentual por categoria no puede superar el 100%'});
                }

                total_preguntas_categorias += preguntas_categoria;
                valor_total_categorias += valor_categoria;

            }

        }

        // Validamos que los datos ingresados para las categotrias 
        // de la competencia especifica sean correctos (si aplica)
        if(valoresEspecificas && valoresEspecificas.length > 0){

            for(const categoria_config of valoresEspecificas){

                // Obtenemos el id de la categoria actual
                const preguntas_categoria = categoria_config[1];
                const valor_categoria = categoria_config[2];

                // Primero validamos que la cantidad de preguntas por categoria
                // NO supere el total de preguntas
                if(preguntas_categoria > total_preguntas){
                    return res.status(400).json({error: 'La cantidad de preguntas por categoria no puede superar al total de preguntas de la prueba'});
                }

                // Luego validamos que el porcentaje por cada categoria
                // NO supere el total (100%)
                if(valor_categoria > 100){
                    return res.status(400).json({error: 'El valor porcentual por categoria no puede superar el 100%'});
                }

                total_preguntas_categorias += preguntas_categoria;
                valor_total_categorias += valor_categoria;

            }

        }

        // Validamos la cantidad total de preguntas
        if(total_preguntas_categorias > total_preguntas || total_preguntas_categorias < total_preguntas){
            return res.status(400).json({error: 'El total de preguntas por categoria no coincide con el total especificado para la prueba'});
        }

        // Validamos el valor total de las categorias
        if(valor_total_categorias > 100 || valor_total_categorias < 100){
            return res.status(400).json({error: 'El valor total de las categorias no coincide con el 100% designado'});
        }

        // Validamos la cantidad de preguntas por categoria general ingresadas no supere
        // las disponibles
        for(const categoria_config of valoresGenericas){

            // Obtenemos el id de la categoria actual
            const categoriaId = categoria_config[0];
            const preguntas_categoria = categoria_config[1];

            // Obtenemos la cantidad total de preguntas de esa categoria
            const numero_preguntas = await Pregunta.findAll({
                where: {
                    categoria_id: categoriaId
                }
            });

            const categoria = await Categoria.findByPk(categoriaId);

            // Validamos que la cantidad de preguntas solicitadas no supere
            // las actualmente disponibles
            if(preguntas_categoria > numero_preguntas){
                return res.status(400).json({error: `La cantidad de preguntas solicitadas para la categoria ${categoria.nombre} supera las actualmente disponibles`});
            }

        }

        // Validamos la cantidad de preguntas por categoria especifica ingresadas no supere
        // las disponibles
        for(const categoria_config of valoresEspecificas){

            // Obtenemos el id de la categoria actual
            const categoriaId = categoria_config[0];
            const preguntas_categoria = categoria_config[1];

            // Obtenemos la cantidad total de preguntas de esa categoria
            const numero_preguntas = await Pregunta.findAll({
                where: {
                    categoria_id: categoriaId
                }
            });

            const categoria = await Categoria.findByPk(categoriaId);

            // Validamos que la cantidad de preguntas solicitadas no supere
            // las actualmente disponibles
            if(preguntas_categoria > numero_preguntas){
                return res.status(400).json({error: `La cantidad de preguntas solicitadas para la categoria ${categoria.nombre} supera las actualmente disponibles`});
            }

        }

        // Creamos la prueba
        const prueba = await Prueba.create({
            nombre,
            descripcion,
            semestre,
            duracion,
            total_preguntas
        });

        // Creamos la relacion con competencia 

        for (const competencia_id of competencias) {

            await PruebaCompetencia.create({
                prueba_id: prueba.id,
                competencia_id
            });

            
        }

        // Creamos la relacion con categoria

        /*if(valoresGenericas && valoresGenericas.length > 0){

            for(const categoria_config of valoresGenericas){

                await ConfiguracionCategoria.create({
                    cantidad_preguntas: categoria_config[1],
                    valor_categoria: categoria_config[2],
                    prueba_id: prueba.id,
                    categoria_id: categoria_config[0]
                });

                asignarPreguntas(prueba.id, total_preguntas, categoria_config[0], categoria[1])

            }

        }*/

        res.status(200).json('Prueba creada exitosamente');


    }catch(err){
        res.status(500).json({error: err.message});
    }

};


module.exports = {
    getPruebas,
    getPruebasId, 
    createPrueba
}