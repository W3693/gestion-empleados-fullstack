// Importamos express y creamos un enrutador
const express = require('express');
const router = express.Router();

// Importamos el controlador de autenticación que contiene la lógica de registro y login
const authCtrl = require('../controllers/auth.controller');

// Ruta para registrar un nuevo usuario
// POST /api/auth/register
router.post('/register', authCtrl.register);

// Ruta para iniciar sesión y obtener un token JWT
// POST /api/auth/login
router.post('/login', authCtrl.login);

// Exportamos el enrutador para usarlo en index.js o app.js principal
module.exports = router;