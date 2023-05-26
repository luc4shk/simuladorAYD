const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');
const sequelize = require('../database/db');
const bcrypt = require('bcrypt');

// Función encargada de crear el usuario administrador
const createAdminUser = async () => {

    try{

        await sequelize.transaction(async (t) => {

            // Obtenemos el rol de administrador 
            const adminRole = await Rol.findOne({
                where: {nombre: 'Administrador'}
            });

            const getSalt = await bcrypt.genSalt(11);
            const hashed = await bcrypt.hash('Director1234', getSalt);

            // Creamos el usuario
            const user  = await Usuario.create({
                nombre: 'Jaider',
                apellido: 'Oliveros',
                codigo: '1156060',
                email: 'fogattateam@gmail.com',
                password: hashed,
                tipo: 'director',
                telefono: '5556575',
                direccion: 'Mi hogar es Colombia carajo',
                documento: '1002432780',
                celular: '3135687982',
                rol_id: adminRole.id
            }, {transaction: t});

            console.log('Usuario administrador creado correctamente');

        });

    }catch(error){
        console.log(error.message);
    }

};

createAdminUser();