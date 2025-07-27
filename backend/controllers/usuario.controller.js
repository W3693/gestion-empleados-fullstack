// ✅ Importación corregida según el nombre real del archivo
const Usuario = require('../models/usuario');

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(usuarioActualizado);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar usuario' });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar usuario' });
  }
};
