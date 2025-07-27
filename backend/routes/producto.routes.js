const express = require('express');
const router = express.Router();

// ✅ Asegúrate de que esta ruta sea correcta
const productoCtrl = require('../controllers/producto.controller');

// 🛠️ Verifica que estas funciones existen en producto.controller.js
router.get('/', productoCtrl.getProductos);
router.post('/', productoCtrl.crearProducto);
router.get('/:id', productoCtrl.getProductoPorId);
router.put('/:id', productoCtrl.actualizarProducto);
router.delete('/:id', productoCtrl.eliminarProducto);

module.exports = router;
