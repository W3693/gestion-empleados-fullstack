const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 0
  },
  descripcion: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', ProductoSchema);
