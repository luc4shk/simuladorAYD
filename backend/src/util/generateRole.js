const Rol = require('../models/Rol');

// Definimos los roles a insertar
const predefinedRoles = [
    {nombre: 'Administrador'},
    {nombre: 'Estudiante'}
];

// Creamos los roles
Rol.bulkCreate(predefinedRoles).then(() => {
    console.log('Predefined roles created successfully');
})
.catch((err) => console.error('Error creating predefined roles', err.message));