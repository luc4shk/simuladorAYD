const Convocatoria = require('../models/Convocatoria');
const Prueba = require('../models/Prueba');
const Usuario = require('../models/Usuario');
const password_generator = require('generate-password');
const encryptPasswd= require('../util/encryptPassword');
const generateCorreo = require('../util/emailGenerator');
const Inscripcion = require('../models/Inscripcion');
const sequelize = require('../database/db');
const XLSX = require("xlsx");
const { Op } = require('sequelize');

/* --------- getConvocatorias function -------------- */

const getConvocatorias = async (req, res) => {

    try{

        // Paginación y limites
        const page = req.query.page || 1;
        const limit = 5;
        const offset = (page - 1) * limit;

        // Estado
        const state = req.query.estado || true;

        // Obtenemos las convocatorias
        const convocatorias = await Convocatoria.findAll({
            attributes: ['id', 'nombre', 'fecha_inicio', 'fecha_fin'],
            where: {
                estado: state
            },
            order: ['fecha_fin', 'DESC'],
            limit,
            offset
        });

        // Respondemos al usuario
        res.status(200).json(convocatorias);

    }catch(error){
        return res.status(500).json({error: `Error al obtener convocatorias: ${error.message}`});
    }

};


/* --------- getConvocatoriaById function -------------- */

const getConvocatoriaById = async (req, res) => {

    try{

        //Obtenemos el id de la convocatoria
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]+$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos la convocatoria y verificamos su existencia
        const convocatoria = await Convocatoria.findByPk(id, {
            include: {
                model: Prueba,
                attributes: ['nombre']
            }
        });

        // Respondemos al usuario
        res.status(200).json(convocatoria);

    }catch(error){
        return res.status(500).json({error: `Error al obtener los datos de la convocatoria especificada ${error.message}`});
    }

};


/* --------- createConvocatoria function -------------- */

const createConvocatoria = async (req, res) => {

    try{

        // Obtenemos los datos de la convocatoria
        const {nombre, descripcion, fecha_inicio, fecha_fin, prueba_id} = req.body;

        // Obtenemos el archivo excel cargado por el usuario 
        const excelFileBuffer = req.files.archivo.data;

        // Validamos los datos
        if(!nombre || !descripcion || !fecha_inicio || !fecha_fin || !prueba_id || !excelFileBuffer){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }

        const regexNum = /^[0-9]+$/;
        const regexData = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

        if(!regexData.test(nombre) || !regexNum.test(prueba_id)){
            return res.status(400).json({error: 'La sintaxis de los datos no es correcta'});
        }

        // Validamos la exsitencia de la prueba 
        const pruebaExist = await Prueba.findByPk(prueba_id);

        if(!pruebaExist){
            return res.status(400).json({error: 'No existe ninguna prueba con el id especificado'})
        }

        // Creamos un array que contendra las usuarios insertados
        const estudiantes = [];

        //Inicializamos la transacción
        await sequelize.transaction(async (t) => {

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
                if(!itemFila['Nombre'] || !itemFila['Apellido'] || !itemFila['Codigo'] || !itemFila['Email']
                    || !itemFila['Semestre']){

                    return res.status(400).json({error: 'Formato de archivo no correspondiente'});

                }

                // Validar el codigo y el email 
                const email = itemFila['Email'];
                const codigo = itemFila['Codigo'];

                const studentExist = await Usuario.findOne({
                    where: {
                      [Op.or]: [
                        {
                          codigo,
                          email: { [Op.ne]: email } // Email diferente al ingresado
                        },
                        {
                          codigo: { [Op.ne]: codigo }, // Código diferente al ingresado
                          email // Email coincidente al ingresado
                        }
                      ],
                      tipo: 'estudiante'
                    }
                });
                
                if(studentExist){
                    return res.status(400).json({error: `El código ${codigo} o el email ${email} ya fueron asignados`});
                }

                // Creamos el estudiante
                const estudiante = Usuario.build({
                    nombre: itemFila['Nombre'],
                    apellido: itemFila['Apellido'],
                    codigo,
                    email,
                    password: '',
                    tipo: 'estudiante',
                    semestre: itemFila['Semestre'],
                    rol_id: 2
                });

                estudiantes.push(estudiante);

            }

            if(estudiantes.length === 0){
                return res.status(400).json({error: `No se pudo almacenar a ningun estudiante`});
            }

            // Creamos la convocatoria
            const convocatoria = await Convocatoria.create({
                nombre,
                descripcion,
                fecha_inicio: new Date(fecha_inicio),
                fecha_fin: new Date(fecha_fin),
                prueba_id
            });

            // Creamos las inscripciones
            for(student of estudiantes){

                // Validamos si el estudiante existe
                const estudianteExist = await Usuario.findOne({
                    where: {
                        nombre: student.nombre,
                        apellido: student.apellido,
                        email: student.email,
                        codigo: student.codigo,
                        tipo: 'estudiante'
                    }
                });

                // Si el estudiante no ha sido registrado
                if(!estudianteExist){

                    // Generamos la contraseña
                    const password = password_generator.generate({
                        length: 15,
                        numbers: true
                    });

                    // Ciframos la contraseña
                    const hashedPassword = await encryptPasswd(password);

                    // Asignamos la contraseña
                    student.password = hashedPassword;

                    // Guardamos en la BD
                    await student.save();

                    // Enviamos correo de confirmación de registro
                    await generateCorreo(`${student.nombre} ${student.apellido}`, student.email, password);

                }

                // Buscamos el estudiante almacenado en la BD
                const estudianteDB = await Usuario.findOne({
                    where: {
                        codigo: student.codigo
                    }
                });

                // Creamos la inscripción a la convocatoria
                await Inscripcion.create({
                    fecha_inscripcion: new Date(),
                    usuario_id: estudianteDB.id,
                    convocatoria_id: convocatoria.id
                });

            }

            res.status(200).json({message: `Se han registrado ${estudiantes.length} estudiantes para la convocatoria ${convocatoria.nombre}`});

        });

    }catch(err){
        return res.status(500).json({error: `Error al procesar el archivo de estudiantes: ${err.message}`});
    }

};


/* --------- updateConvocatoria function -------------- */

const updateConvocatoria = async (req, res) => {

    try {

        //Obtenemos el id
        const {id} = req.params;
        
        // Verificamos el id
        const regexNum = /^[0-9]+$/;

        if(!regexNum.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        // Obtenemos la convocatoria
        const convocatoria = await Convocatoria.findByPk(id);
        
        //Verificamos que exista la convocatoria
        if(!convocatoria){
            return res.status(400).json({error: 'No se encuentra ninguna convocatoria con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {nombre, prueba_id, descripcion, fecha_inicio, fecha_fin} = req.body;

        // Validamos los datos a actualizar
        if(!nombre || !prueba_id || !descripcion || !fecha_inicio || !fecha_fin){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }

        const regexData = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

        if(!regexData.test(nombre) || !regexNum.test(prueba_id)){
            return res.status(400).json({error: 'La sintaxis de los datos no es correcta'});
        }

        // Validamos que exista la prueba enlazada a la convocatoria
        const existPrueba = await Prueba.findByPk(prueba_id);

        if(!existPrueba){
            return res.status(400).json({error: 'No existe ninguna prueba con el id especificado'})
        }

        //Actualizamos la convocatoria
        await convocatoria.update({
            nombre,
            descripcion,
            fecha_inicio: new Date(fecha_inicio),
            fecha_fin: new Date(fecha_fin),
            prueba_id
        })

        res.status(200).json('Convocatoria actualizada correctamente');
        
    } catch (err) {
        return res.status(500).json({error: `Error al actualizar la convocatoria: ${err.message}` });
    }

}


module.exports = {
    getConvocatorias,
    getConvocatoriaById,
    createConvocatoria,
    updateConvocatoria
}