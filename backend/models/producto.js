const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', ProductoSchema);