// Este archivo define el modelo de datos de un Producto en Angular.
// Se usa para inicializar objetos, vincular datos en formularios y estructurar peticiones HTTP.

export class Producto {

  // Constructor que inicializa el modelo con valores por defecto.
  // Se utiliza cuando se crea un nuevo producto o se resetea el formulario.
  constructor(
    _id = "",
    nombre = "",
    precio = 0,
    stock = 0,
    descripcion = "" // Campo requerido por el backend
  ) {
    this._id = _id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion; // ✅ Asegura que Angular lo envíe al backend
  }

  // Propiedades del modelo con tipos explícitos
  _id: string;          // ID generado por MongoDB, usado para identificar el producto
  nombre: string;       // Nombre comercial del producto (requerido)
  precio: number;       // Precio unitario (debe ser ≥ 0)
  stock: number;        // Unidades disponibles en inventario (debe ser ≥ 0)
  descripcion: string;  // Descripción del producto (mínimo 5 caracteres, requerida por el backend)
}
