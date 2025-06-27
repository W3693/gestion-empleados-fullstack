const express = require('express');
const router = express.Router();
const productoCtrl = require('../controllers/producto.controller'); // Asegúrate de que el controlador exista

// Obtener todos los productos
router.get('/', productoCtrl.getProductos);

// Obtener un producto por ID
router.get('/:id', productoCtrl.getProductoPorId);

// Crear un nuevo producto
router.post('/', productoCtrl.createProducto);

// Actualizar un producto existente
router.put('/:id', productoCtrl.editarProducto);

// Eliminar un producto
router.delete('/:id', productoCtrl.eliminarProducto);

module.exports = router;