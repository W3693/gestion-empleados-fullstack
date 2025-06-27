const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

// Obtener todos los empleados
router.get('/', empleadoCtrl.getEmpleados);

// Obtener un empleado por ID
router.get('/:id', empleadoCtrl.getUnicoEmpleado);

// Crear un nuevo empleado
router.post('/', empleadoCtrl.createEmpleados);

// Actualizar un empleado
router.put('/:id', empleadoCtrl.editarEmpleado);

// Eliminar un empleado
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;