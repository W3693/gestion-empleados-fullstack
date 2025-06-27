// Importamos el modelo de Usuario para acceder a la base de datos
const Usuario = require('../models/usuario');

// Librería para generar y verificar tokens JWT
const jwt = require('jsonwebtoken');

// Librería para encriptar y comparar contraseñas de forma segura
const bcrypt = require('bcryptjs');

// Definimos el objeto controlador de autenticación
const authCtrl = {};

// ===========================================
// Función para registrar un nuevo usuario
// ===========================================
authCtrl.register = async (req, res) => {
  // Extraemos username y password del body de la petición
  const { username, password } = req.body;

  // Verificamos si el usuario ya existe en la base de datos
  const userExists = await Usuario.findOne({ username });
  if (userExists) {
    // Si existe, devolvemos error 400 (petición inválida)
    return res.status(400).json({ error: 'El usuario ya existe' });
  }

  // Encriptamos la contraseña usando bcrypt con 8 rondas de sal
  const hashedPassword = await bcrypt.hash(password, 8);

  // Creamos un nuevo usuario, guardando el username y la contraseña encriptada
  const newUser = new Usuario({ username, password: hashedPassword });

  // Guardamos el nuevo usuario en la base de datos
  await newUser.save();

  // Respondemos al cliente confirmando que el registro fue exitoso
  res.json({ message: 'Usuario registrado exitosamente' });
};

// ===========================================
//  Función para login de usuario (autenticación)
// ===========================================
authCtrl.login = async (req, res) => {
  // Extraemos username y password desde el cuerpo de la petición
  const { username, password } = req.body;

  // Buscamos el usuario en la base de datos por su username
  const user = await Usuario.findOne({ username });

  // Si no existe, devolvemos error 404 (no encontrado)
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // Comparamos la contraseña ingresada con la almacenada (encriptada)
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    // Si no coincide, error 401 (no autorizado)
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  // Si todo es correcto, generamos un token JWT con duración de 1 hora
  const token = jwt.sign(
    { id: user._id }, // payload: enviamos solo el ID del usuario
    'secreto123',     // clave secreta (en producción usar variables de entorno)
    { expiresIn: '1h' } // duración del token
  );

  // Respondemos con mensaje y el token generado
  res.json({ message: 'Autenticación exitosa', token });
};

// Exportamos el controlador para usarlo en las rutas
module.exports = authCtrl;
