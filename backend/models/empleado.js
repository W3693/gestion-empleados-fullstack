const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpleadoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  position: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  office: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true // Opcional: añade campos createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);