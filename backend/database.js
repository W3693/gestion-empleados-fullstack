// config/database.js
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/empleados';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Eventos de conexión
mongoose.connection.on('connected', () => {
  console.log(' Conectado exitosamente a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(' Error al conectar con MongoDB:', err.message);
});

module.exports = mongoose;