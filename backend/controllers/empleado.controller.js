const Empleado = require('../models/empleado');

const empleadoCtrl = {};

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find().select('-__v -createdAt -updatedAt');
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener empleados', error: error.message });
  }
};

// Crear empleados (🛠️ corregido para ignorar _id)
empleadoCtrl.createEmpleados = async (req, res) => {
  try {
    const { _id, ...datosLimpios } = req.body; // ⛔️ Ignora _id si fue enviado
    const empleado = new Empleado(datosLimpios);
    await empleado.save();
    res.json({ status: 'Empleado guardado', data: empleado });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear empleado', error: error.message });
  }
};

// Obtener un único empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  try {
    const empleadoUnico = await Empleado.findById(req.params.id).select('-__v -createdAt -updatedAt');
    res.json(empleadoUnico);
  } catch (error) {
    res.status(404).json({ mensaje: 'Empleado no encontrado', error: error.message });
  }
};

// Actualizar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoEdit = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
    res.json({ status: 'Empleado Actualizado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar empleado', error: error.message });
  }
};

// Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado Eliminado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar empleado', error: error.message });
  }
};

module.exports = empleadoCtrl;
