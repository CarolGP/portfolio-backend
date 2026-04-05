# Portfolio BACK

API REST para gestionar las ilustraciones del portfolio.  
Permite obtener, crear, editar y eliminar proyectos, así como gestionar la galería y portfolio de imágenes.

La API está diseñada para ser utilizada junto con el frontend del proyecto.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- Cloudinary
- Swagger
- Multer
- dotenv
- cors

---

## Instalación

Clonar repositorio: git clone <url-del-repositorio>

Entrar en la carpeta: cd backportfolio

Instalar dependencias: npm install

Crear archivo .env basado en .env.example.

Iniciar servidor: npm run dev

El servidor se ejecutará en: http://localhost:3000

---

## Endpoints principales

### Gallery

Obtener todas las ilustraciones: GET /gallery

Crear ilustración: POST /gallery

Eliminar ilustración: DELETE /gallery/:id

Actualizar ilustración: PUT /gallery/:id

---

### Portfolio

Obtener proyectos del portfolio: GET /portfolio

---

### Autenticación

Endpoint de login para acceder al panel admin:
POST /auth/login

---

## Subida de imágenes

Las imágenes se almacenan en Cloudinary.

Endpoint: POST /gallery

Formato: multipart/form-data

Campo requerido: image

---

## Documentación Swagger

Disponible en:

http://localhost:3000/api-docs

Permite probar los endpoints desde el navegador.

---

## Tests

Ejecutar: npm test