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

// Crear producto
productoCtrl.crearProducto = async (req, res) => {
  try {
    const { _id, ...datosLimpios } = req.body;
    const producto = new Producto(datosLimpios);
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
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener producto', error: error.message });
  }
};

// Actualizar producto (🛠️ campo 'descripcion' añadido)
productoCtrl.actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEditado = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock,
      descripcion: req.body.descripcion // 👈 asegurado
    };
    await Producto.findByIdAndUpdate(id, { $set: productoEditado }, { new: true });
    res.json({ status: 'Producto actualizado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar producto', error: error.message });
  }
};

// Eliminar producto
productoCtrl.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar producto', error: error.message });
  }
};

module.exports = productoCtrl;