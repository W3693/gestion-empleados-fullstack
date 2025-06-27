const Producto = require('../models/producto');

const productoCtrl = {};

// Obtener todos los productos
productoCtrl.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find().select('-__v -createdAt -updatedAt');
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
  }
};

// Crear un nuevo producto
productoCtrl.createProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({ status: 'Producto guardado', data: producto });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear producto', error: error.message });
  }
};

// Obtener un producto por ID
productoCtrl.getProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).select('-__v -createdAt -updatedAt');
    res.json(producto);
  } catch (error) {
    res.status(404).json({ mensaje: 'Producto no encontrado', error: error.message });
  }
};

// Actualizar un producto
productoCtrl.editarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const update = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio
    };
    await Producto.findByIdAndUpdate(id, { $set: update }, { new: true });
    res.json({ status: 'Producto actualizado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
  }
};

// Eliminar un producto
productoCtrl.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar', error: error.message });
  }
};

module.exports = productoCtrl;