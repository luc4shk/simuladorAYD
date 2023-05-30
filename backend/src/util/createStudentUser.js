const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');
const sequelize = require('../database/db');
const bcrypt = require('bcrypt');

// Función encargada de crear el usuario administrador
const createStudentUser = async () => {

    try{
        await sequelize.transaction(async (t) => {
            // Obtenemos el rol de estudiante 
            const studentRole = await Rol.findOne({
                where: {nombre: 'Estudiante'}
            });
            const getSalt = await bcrypt.genSalt(11);
            const hashed = await bcrypt.hash('soyunestudiante', getSalt);
            console.log(studentRole.nombre);
            // Creamos el usuario estudiante
            const user  = await Usuario.create({
                nombre: 'Jennifer',
                apellido: 'Salazar',
                codigo: '1152090',
                email: 'js1199622@gmail.com',
                password: hashed,
                tipo: 'estudiante',
                semestre: 6,
                rol_id: studentRole.id
            }, {transaction: t});
            console.log(user.rol_id)
            console.log('Usuario estudiante creado correctamente');

        });

    }catch(error){
        console.log(error);
    }

};

createStudentUser();