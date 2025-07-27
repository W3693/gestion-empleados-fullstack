require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Conexión a la base de datos
require('./database');

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Rutas principales
app.use('/api/empleados', require('./routes/empleado.routes'));
app.use('/api/productos', require('./routes/producto.routes'));
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/users', require('./routes/usuario.routes')); // ✅ Ruta agregada

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor activo en el puerto ${app.get('port')}`);
});
