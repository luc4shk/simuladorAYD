const Pregunta = require('../models/Pregunta');
const Categoria = require('../models/Categoria');
const XLSX = require("xlsx");

// Importamos el objeto de conexión
const sequelize = require('../database/db');


const getAllQuestions = async (req, res) => {

    try{

        // Obtenemos todas las preguntas de la BD
        const questions = await Pregunta.findAll({
            where: {estado: true},
            attributes: ['id', 'texto_pregunta', 'semestre', 'estado'],
            include: {
                model: Categoria,
                attributes: ['nombre']
            }
        });

        res.status(200).json(questions);

    }catch(error){
        res.status(500).json({message: error.message});
    }

};


const createQuestion = async (req, res) => {

    try{

        // Creamos un array que contendra las preguntas insertadas
        const questions = [];

        //Inicializamos la transacción
        await sequelize.transaction(async (t) => {

            // Obtenemos el archivo excel cargado por el usuario 
            const excelFileBuffer = req.files.archivo.data;

            // Procesamos el archivo excel y obtenemos los datos
            const workbook = XLSX.read(excelFileBuffer, {
                type: 'buffer'
            });
            const workbookSheets = workbook.SheetNames;
            const sheet = workbookSheets[0];
            const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

            // Creamos las preguntas
            for(const itemFila of dataExcel){

                // Validar las cabeceras del archivo
                if(!itemFila['Enunciado'] || !itemFila['Semestre'] || !itemFila['A'] || !itemFila['B']
                    || !itemFila['C'] || !itemFila['D'] || !itemFila['Respuesta'] || !itemFila['Categoria']){

                    return res.status(400).json({error: 'Formato de archivo no correspondiente'});

                }
               
                // Obtener la categoria de la pregunta
                const categoriaReceived = itemFila['Categoria'].toUpperCase();

                // En caso de haber un error, verificamos la existencia de la pregunta con el fin
                // de que esta no vuelva a ser insertada
                const preguntaExist = await Pregunta.findOne({
                    where: {
                        texto_pregunta: itemFila['Enunciado']
                    }
                });

                if(preguntaExist){
                    continue;
                }

                // Validar la categoria
                const categoriaFound = await Categoria.findOne({
                    where: {
                        nombre: categoriaReceived
                    }
                })

                if(!categoriaFound){
                    return res.status(400).json({error: 'La categoria proporcionada no existe'});
                }

                // Creamos el arreglo con las opciones
                const options = [itemFila['A'], itemFila['B'], itemFila['C'], itemFila['D']];

                // Formateamos el enunciado
                const enunciado = itemFila['Enunciado'].replace(/- /g, "");
                const enunciadoFinal = enunciado.replace(/\n/g, " ")

                // Creamos la pregunta
                const question =  await Pregunta.create({
                    texto_pregunta: enunciadoFinal,
                    semestre: itemFila['Semestre'],
                    opciones: JSON.stringify(options),
                    respuesta: itemFila['Respuesta'],
                    categoria_id: categoriaFound.id
                }, {transaction: t});

                questions.push(question);

            }

            res.status(200).json({message: `Se han procesado ${questions.length} preguntas correctamente`});

        });

    }catch(err){
        res.status(500).json({error: err.message});
    }

}


const getQuestionById = async (req, res) => {

    try{

        // Obtenemos el id de la pregunta a especificar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos la pregunta y validamos su existencia
        const pregunta = await Pregunta.findByPk(id, {
            include: {
                model: Categoria,
                attributes: ['nombre']
            }
        });

        if(!pregunta){
            return res.status(400).json({error: 'No se encuentra ninguna pregunta con el id especificado'});
        }

        // Formateamos las opciones
        const opciones = JSON.parse(pregunta.opciones);

        const formatedOptions = opciones.map(opcion => {
            return opcion.replace(/\n/g, " ")
        });

        // Formateamos la respuesta
        const response = pregunta.respuesta.replace(/\n/g, " ");

        // Respondemos al usuario
        res.status(200).json({
            enunciado: pregunta.texto_pregunta,
            opciones: formatedOptions,
            respuesta: response,
            estado: pregunta.estado,
            semestre: pregunta.semestre,
            categoria: pregunta.categoria.nombre
        });

    }catch(err){
        return res.status(500).json({error: err.message});
    }

};


const actualizarPregunta = async (req, res) => {

    try{

        // Obtenemos el id de la pregunta a especificar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos la pregunta y validamos su existencia
        const pregunta = await Pregunta.findByPk(id);

        if(!pregunta){
            return res.status(400).json({error: 'No se encuentra ninguna pregunta con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {texto_pregunta, semestre, opciones, estado, respuesta, categoria_id} = req.body;

        // Validamos los datos obtenidos
        const regexData = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/; // Validación de nombres y apellidos

        if(!regexId.test(semestre) || (!Array.isArray(opciones) || opciones.length !== 4) || typeof estado !== 'boolean' || !regexId.test(categoria_id)){
            return res.status(400).json({error: 'La sintaxis de los datos ingresados es incorrecta'});
        }

        // Validamos que el id de categoria recibido corresponda a una existente
        const categoriaExist = Categoria.findByPk(categoria_id);

        if(!categoriaExist){
            return res.status(400).json({error: "El id de categoria proporcionado no corresponde a ninguna existente"});
        }

        // Actualizamos la pregunta
        await pregunta.update({
            texto_pregunta,
            semestre,
            opciones: JSON.stringify(opciones),
            estado,
            respuesta,
            categoria_id
        });

        res.status(200).json(pregunta);

    }catch(err){
        return res.status(400).json({error: err.message});
    }

};

module.exports = {
    getAllQuestions,
    createQuestion,
    getQuestionById,
    actualizarPregunta
}