# 🧰 Proyecto Fullstack: Gestión de Empleados, Productos y Usuarios

Aplicación fullstack desarrollada con **Node.js**, **Express**, **MongoDB** y **Angular**. Este repositorio integra una API RESTful en el backend y una interfaz visual moderna en el frontend. Ideal para entrenar arquitectura modular, autenticación con JWT y gestión de entidades desde el backend hasta la UI.

🔗 Repositorio: [github.com/W3693/gestion-empleados-fullstack](https://github.com/W3693/gestion-empleados-fullstack)

---

## 🧠 Objetivos del Proyecto

- Desarrollar una arquitectura fullstack escalable y organizada
- Integrar autenticación, manejo de rutas, validaciones y simulación de datos
- Usar Angular para crear una SPA con visualización clara y profesional
- Aplicar buenas prácticas técnicas, visuales y documentales

---

## ⚙️ Tecnologías Utilizadas

| Entorno    | Stack                       | Propósito                        |
|------------|-----------------------------|----------------------------------|
| Backend    | Node.js, Express, MongoDB   | API REST, lógica y persistencia  |
| Seguridad  | JWT, bcryptjs               | Autenticación segura             |
| Frontend   | Angular, TypeScript         | SPA con validaciones y UI moderna|
| Dev Tools  | Postman, Git, Obsidian      | Pruebas, versionado, documentación|

---

## 🗂️ Estructura del Proyecto

```txt
📦 /GESTION-EMPLEADOS
┣ 📁 backend            → API REST con Express y MongoDB
┃ ┣ 📁 controllers      → Lógica de negocio para endpoints
┃ ┣ 📁 routes           → Agrupación semántica de rutas REST
┃ ┣ 📁 models           → Esquemas de datos (Mongoose)
┃ ┣ 📁 data             → Simulación de colecciones locales (JSON)
┃ ┣ 📄 database.js      → Conexión con MongoDB
┃ ┣ 📄 index.js         → Punto de entrada (Express)
┣ 📁 frontend           → Interfaz visual (integrada)
┣ 📁 node_modules       → Dependencias del proyecto
┣ ⚙️ .env               → Variables locales (no compartidas)
┣ 📄 .env.example       → Plantilla pública para configuración
┣ 📄 .gitignore         → Exclusión de archivos sensibles
┣ 📄 package.json       → Dependencias y scripts
┣ 📄 package-lock.json  → Versión exacta de paquetes
┗ 📄 README.md          → Documentación y guía del proyecto
```
---

## 🚀 Instalación Local

### 📦 Backend

```bash
cd backend
npm install
cp .env.example .env
node index.js
```
 🟢 El backend se ejecuta por defecto en:  
> `http://localhost:3000`

> 🗄️ La base de datos utiliza MongoDB local, conectándose a:  
> `mongodb://localhost:27017/empleados`

> Asegúrate de tener **MongoDB en ejecución** antes de iniciar el servidor.

### 🎨 Frontend

```bash
cd frontend
npm install
ng serve
```

> 🌐 La aplicación Angular estará disponible en:  
> `http://localhost:4200`
---

## 📌 Endpoints API REST

### 🔑 Autenticación

| Método | Ruta                   | Acción                       |
|--------|------------------------|------------------------------|
| POST   | `/api/auth/register`   | Registrar usuario            |
| POST   | `/api/auth/login`      | Iniciar sesión con JWT       |

### 👤 Empleados

| Método | Ruta                 | Acción                        |
|--------|----------------------|------------------------------|
| GET    | `/api/empleados`     | Obtener lista                 |
| POST   | `/api/empleados`     | Crear empleado                |
| PUT    | `/api/empleados/:id` | Actualizar por ID             |
| DELETE | `/api/empleados/:id` | Eliminar por ID               |

### 📦 Productos

| Método | Ruta                 | Acción                        |
|--------|----------------------|------------------------------|
| GET    | `/api/productos`     | Obtener lista                 |
| POST   | `/api/productos`     | Crear producto                |
| PUT    | `/api/productos/:id` | Actualizar por ID             |
| DELETE | `/api/productos/:id` | Eliminar por ID               |

---

## 🧪 Pruebas con Postman

Ejemplo de registro:

```json
POST http://localhost:3000/api/auth/register

Body (raw → JSON):
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
---

## 🛡️ Seguridad

- Contraseñas encriptadas con `bcryptjs`
- Tokens JWT para sesiones autenticadas
- Frontend listo para implementar interceptores y protección visual

---

## 👤 Autor

Desarrollado por **Walter** como ejercicio pedagógico de backend con Node.js.




