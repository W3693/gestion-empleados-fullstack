// Importamos mongoose para definir el esquema del modelo
const mongoose = require("mongoose");

// Extraemos Schema del objeto mongoose
const { Schema } = mongoose;

// Definimos el esquema de usuario
const UsuarioSchema = new Schema({
    // Campo para el nombre de usuario (único y obligatorio)
    username: {
        type: String,
        required: true,
        unique: true
    },
    // Campo para la contraseña (obligatoria)
    password: {
        type: String,
        required: true
    }
});

// Exportamos el modelo como 'usuario', usando el esquema definido
module.exports = mongoose.model('usuario', UsuarioSchema);