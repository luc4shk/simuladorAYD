const Pregunta = require('../models/Pregunta');
const Categoria = require('../models/Categoria');
const XLSX = require("xlsx");

// Importamos el objeto de conexión
const sequelize = require('../database/db');


// Función encargada de mostrar todas las preguntas almacenadas que esten activas
const getAllQuestions = async (req, res) => {

    try{

        // Obtenemos todas las preguntas de la BD
        const questions = await Pregunta.findAll({
            where: {estado: true},
            attributes: ['texto_pregunta', 'semestre', 'estado'],
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

// Función encargada de la creación de una nueva pregunta
const createQuestion = async (req, res) => {

    try{

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

                if(!itemFila['Enunciado'] || !itemFila['Semestre'] || !itemFila['Enunciado'])
                console.log(typeof itemFila['Enunciado']);

                const question =  await Pregunta.create({
                    texto_pregunta,
                    semestre,
                    opciones,
                    respuesta,
                    categoria_id
                })
            }

            res.json('Archivo leido correctamente');

        });

    }catch(error){

    }

}


module.exports = {
    getAllQuestions,
    createQuestion
}