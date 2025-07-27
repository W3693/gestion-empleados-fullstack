const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');

// Ruta para obtener todos los usuarios
router.get('/', usuarioCtrl.getUsuarios);

// Ruta para crear un nuevo usuario
router.post('/', usuarioCtrl.createUsuario);

// Ruta para actualizar un usuario
router.put('/:id', usuarioCtrl.updateUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', usuarioCtrl.deleteUsuario);

module.exports = router;


