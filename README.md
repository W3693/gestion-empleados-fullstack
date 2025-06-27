# 🛠️ API de Gestión de Empleados, Productos y Usuarios

Este proyecto es una API RESTful construida con **Node.js**, **Express** y **MongoDB**. Fue creada con fines pedagógicos para comprender los fundamentos del backend, autenticación y manejo de rutas, modelos y controladores.

---

## 📁 Estructura del Proyecto

```
📦 GESTION-EMPLEADOS
├── controllers/
│   ├── auth.controller.js
│   ├── empleado.controller.js
│   └── producto.controller.js
├── models/
│   ├── empleado.js
│   ├── producto.js
│   └── usuario.js
├── routes/
│   ├── auth.routes.js
│   ├── empleado.routes.js
│   └── producto.routes.js
├── database.js
├── index.js
├── .env              # ← Variables locales (no se sube)
├── .env.example      # ← Plantilla pública
├── .gitignore        # ← Ignora node_modules, .env, logs, etc.
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/backend-api.git
cd backend-api
```

2. Instala dependencias:

```bash
npm install
```

3. Crea tu archivo `.env` basado en `.env.example`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/empleados
JWT_SECRET=secreto123
```

4. Ejecuta el servidor:

```bash
node index.js
```

---

## 📌 Endpoints disponibles

### 🔑 Autenticación

| Método | Ruta                   | Descripción                  |
|--------|------------------------|------------------------------|
| POST   | `/api/auth/register`   | Registrar un nuevo usuario   |
| POST   | `/api/auth/login`      | Iniciar sesión (JWT)         |

### 👤 Empleados

| Método | Ruta                 | Descripción                    |
|--------|----------------------|--------------------------------|
| GET    | `/api/empleados`     | Obtener todos los empleados    |
| POST   | `/api/empleados`     | Crear nuevo empleado           |
| PUT    | `/api/empleados/:id` | Actualizar empleado por ID     |
| DELETE | `/api/empleados/:id` | Eliminar empleado por ID       |

### 📦 Productos

| Método | Ruta                 | Descripción                    |
|--------|----------------------|--------------------------------|
| GET    | `/api/productos`     | Obtener todos los productos    |
| POST   | `/api/productos`     | Crear nuevo producto           |
| PUT    | `/api/productos/:id` | Actualizar producto por ID     |
| DELETE | `/api/productos/:id` | Eliminar producto por ID       |

---

## 🧪 Pruebas con Postman

Puedes usar Postman para probar los endpoints. Aquí tienes un ejemplo para registrar un usuario:

**POST** `http://localhost:3000/api/auth/register`  
**Body (raw → JSON)**:
```json
{
  "username": "walter",
  "password": "123456"
}
```

---

## ⚙️ Variables de entorno (`.env` y `.env.example`)

Tu archivo `.env` debe estar en la raíz del proyecto y contener lo siguiente:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/empleados
JWT_SECRET=secreto123
```

Incluimos un archivo `.env.example` en el repositorio para que otros desarrolladores puedan crear su propio `.env` fácilmente.

---

## 🚫 Archivos ignorados (`.gitignore`)

Para evitar subir archivos innecesarios o sensibles, se incluye un `.gitignore` con:

```
node_modules/
.env
*.log
```

---

## 💡 Notas

- Este proyecto no implementa rutas protegidas para mantenerlo simple y didáctico.
- Las contraseñas están encriptadas con `bcryptjs`.
- Se utiliza `jsonwebtoken` para emitir tokens JWT tras el login.

---

## 🧑‍💻 Autor

Desarrollado por **Walter** como ejercicio pedagógico de backend con Node.js.
```

---

Esto ya está listo para subir y lucirlo 💼 Si quieres, te puedo generar el archivo `.env.example` automáticamente y ayudarte a hacer tu primer `commit` limpio en Git con mensajes bien redactados.

¿Quieres ese empujón final para ponerlo en GitHub? 🚀📁
