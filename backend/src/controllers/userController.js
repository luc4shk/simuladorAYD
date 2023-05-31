const Usuario = require('../models/Usuario');
const multer = require('multer');

// @desc Endpoint encargado de la obtención de todos los estudiantes activos
// @route GET /api/user
// @access solo Admin
getStudents =  async (req, res) => {

    try {

        //Obtenemos los estudiantes
        const students = await Usuario.findAll({
            where: {
                tipo: 'estudiante', 
                estado: true
            }
        })

        // Respondemos al usuario
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};


// @desc Endpoint encargado de la obtención de un solo estudiante activo por su id
// @route GET /api/user/:id
// @access solo Admin
getStudentById = async (req, res) => {
    
    try {

        //Obtenemos el id del estudiante
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        //Obtenemos el estudiante y verificamos su existencia
        const student = await Usuario.findOne({
            where: {
                id,
                rol_id: 2
            }
        });

        if(!student){
            return res.status(400).json({error: 'No se encuentra ningun estudiante asociado con el id especificado'});
        }

        // Respondemos al usuario
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({message: error.message});
    }

};


// @desc Endpoint encargado de la actualización de los datos de contacto de un estudiante por el mismo a partir de su id
// @route PUT /api/user/update/:id
// @access solo Estudiante
actualizarDatosEstudiante = async (req, res) => {

    try {

        //Obtenemos el id del estudiante a actualizar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexId = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexId.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        //Obtenemos el estudiante y verificamos su existencia
        const student = await Usuario.findOne({
            where: {
                id,
                rol_id: 2
            }
        });

        if(!student){
            return res.status(400).json({error: 'No se encuentra ningun estudiante asociado con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {nombre, apellido} = req.body;

        // Validamos los datos obtenidos
        const regexData = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/; // Validación de nombres y apellidos

        if(!regexData.test(nombre) || !regexData.test(apellido)){
            return res.status(400).json({error: 'La sintaxis de los datos ingresados es incorrecta'});
        }
        
        //Actualizamos el estudiante
        student.update({
            nombre,
            apellido
        });

        //Respondemos a la petición
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


//Métodos para el Director

// @desc Endpoint encargado de la creación de un nuevo estudiante
// @route PUT /api/user/update/:id
// @access solo Estudiante
createStudent =  async (req, res) => {

    try {

        // Obtenemos los datos de el estudiante a crear
        const {nombre, apellido, codigo, email, password, semestre} = req.body;

        // Validamos los datos obtenidos
        if(!nombre || !apellido || !codigo || !email || !password || !semestre){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        } 

        const regexNum = /^[0-9]*$/;
        const regexData = /^[a-zA-Z\s]*$/;

        if(!regexData.test(nombre) || !regexData.test(apellido) || !regexNum.test(codigo) || !regexNum.test(semestre)){
            return res.status(400).json({error: 'La sintaxis de los datos ingresados es incorrecta'});
        }

        //Validamos que el código sea único
        const studentExist = await Usuario.findOne({
            where: {
                codigo
            }
        })

        if(studentExist){
            return res.status(400).json({error: 'El codigo del estudiante debe ser unico'});
        }

        const student = await Usuario.create({
            nombre,
            apellido,
            codigo,
            email,
            password,
            tipo: 'estudiante',
            semestre,
            rol_id: 2
        })

        // Respondemos al usuario
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

updateStudentForD = async (req, res) => {

    try {

        //Obtenemos el id del estudiante a actualizar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexNum = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexNum.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        //Obtenemos el estudiante
        const student = await Usuario.findByPk(id);

        if(!student){
            return res.status(400).json({error: 'No se encuentra ningun estudiante asociado con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {nombre, apellido, codigo, email, password, semestre, estado} = req.body;

        const regexData = /^[a-zA-Z\s]*$/;

        if(!regexData.test(nombre) || !regexData.test(apellido) || !regexNum.test(codigo) || !regexNum.test(semestre)){
            return res.status(400).json({error: 'La sintaxis de los datos ingresados es incorrecta'});
        }

        //Comprobamos que no exista un estudiante con el mismo codigo
        const studentExist = await Usuario.findOne({
            where: {
                codigo
            }
        });

        if(studentExist){
            res.status(400).json({error: "El codigo de el estudiante debe ser unico"});
        }

        //Actualizamos el estudiante
        student.update({
            nombre,
            apellido,
            codigo,
            email,
            password,
            semestre,
            estado
        });

        //Respondemos a la petición
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

getDirectors =  async (req, res) => {

    try {

        //Obtenemos los directores
        const directors = await Usuario.findAll({
            where: {tipo: 'director'}
        })

        // Respondemos al usuario
        res.status(200).json(directors);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

getDirectorById = async (req, res) => {

    try {

        //Obtenemos el id del director
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexNum = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexNum.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        //Obtenemos el director
        const director = await Usuario.findOne({
            where: {
                id,
                rol_id: 1
            }
        });

        if(!director){
            return res.status(400).json({error: 'No se encuentra ningun director asociado con el id especificado'});
        }

        // Respondemos al usuario
        res.status(200).json(director);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

updateDirector = async (req, res) => {

    try {

        //Obtenemos el id del director a actualizar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexNum = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexNum.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        //Obtenemos y verificamos el director
        const director = await Usuario.findOne({
            where: {
                id,
                rol_id: 1
            }
        });

        if(!director){
            return res.status(400).json({error: 'No se encuentra ningun director asociado con el id especificado'});
        }

        // Obtenemos los datos a actualizar
        const {nombre, apellido, codigo, email, password, telefono, direccion, documento, celular, estado} = req.body;

        const regexData = /^[a-zA-Z\s]*$/;

        if(!regexData.test(nombre) || !regexData.test(apellido) || !regexNum.test(codigo) || !regexNum.test(telefono) || !regexNum.test(documento) || !regexNum.test(celular)){
           return res.status(400).json({error: 'La sintaxis de los datos ingresados es incorrecta'});
        }

        //Comprobamos que no exista un director con el mismo codigo y documento
        const directorExist = await Usuario.findOne({
            where: {
                codigo,
                documento
            }
        });

        if(directorExist && directorExist.id !== director.id){
            res.status(400).json({error: "El codigo y documento de el director deben ser unicos"});
        }

        //Actualizamos el director
        director.update({
            nombre,
            apellido,
            codigo,
            email,
            password,
            telefono,
            direccion,
            documento,
            celular,
            estado
        });

        //Respondemos a la petición
        res.status(200).json(director);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

updatePhotoD = async (req, res) => {

    try {

        //Obtenemos el id del director a actualizar
        const {id} = req.params;

        // Verificamos el id de entrada
        const regexNum = /^[0-9]*$/; // Expresión regular que controla solo la admición de numeros

        if(!regexNum.test(id)){
            return res.status(400).json({error: 'id no valido'});
        }

        //Obtenemos el director
        const director = await Usuario.findByPk(id);

        if(!director){
            return res.status(400).json({error: 'No se encuentra ningun director asociado con el id especificado'});
        }

        const fileName = req.files.file.name;
        
        // Configuración de almacenamiento de Multer
        const storage = multer.diskStorage({

            destination: (req, file, cb) => {
                const ruta = './src/multimedia/directors';
                cb(null, ruta);
            },
            filename: (req, file, cb) => {
                const ext = file.originalname.split('.').pop();
                const nombreArchivo = `${director.documento}.${ext}`;
                cb(null, nombreArchivo);
            },
            
        });

        // Configuración de carga de Multer
        const upload = multer({ storage }).single('file');
    
        // Ejecutamos la carga del archivo
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json(err.message);
            }

            const ext = fileName.originalname.split('.').pop();
    
            // Obtenemos la ruta de la foto
            const ruta = `./src/multimedia/directors/${director.documento}.${ext}`;

            // Actualizamos el director
            director.update({
                foto_perfil: ruta
            });
    
            // Respondemos a la petición
            res.status(200).json(director);
        });

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudentForS,
    updateStudentForD,
    getDirectors,
    getDirectorById,
    updateDirector,
    updatePhotoD
}
