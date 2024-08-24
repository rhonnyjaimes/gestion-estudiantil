<p align="center">
  <img src="https://github.com/rhonnyjaimes/Backend-Intensivo-Act-3/blob/main/public/imagen/UVM.png" alt="Logo del Proyecto" width="200" />
</p>

# Gestión Estudiantil

## Descripción del Proyecto

Este proyecto es una aplicación backend desarrollada en Node.js con Express, con autenticación basada en JSON Web Tokens (JWT) y roles diferenciados para usuarios. Utiliza una base de datos MySQL para gestionar datos relacionados con estudiantes y usuarios, proporcionando operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y control de acceso.

## Requisitos

- Node.js (versión 16 o superior recomendada)
- MySQL
- npm

## Instalación

1. **Clona el repositorio**:

    git clone https://github.com/rhonnyjaimes/Backend-Intensivo-Act-3.git

2. **Navega al directorio del proyecto**:

    cd Backend-Intensivo-Act-3
   
3. **Instala las dependencias**:

    npm install

4. **Configura la Base de Datos**:

Crea una base de datos MySQL llamada gestion_estudiantes.
Importa el archivo SQL proporcionado en gestión_estudiantes.sql para crear las tablas y registros iniciales.

5.**Configura las Variables de Entorno**:

Crea un archivo .env en la raíz del proyecto con el siguiente contenido, reemplazando los valores con tu configuración:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=gestion_estudiantes
PORT=3000
JWT_SECRET=tu_secreto_jwt

6.**Inicia el Servidor**:

npm start

7.**Accede a la Aplicación**:

Abre tu navegador web y visita http://localhost:3000/ para acceder a la aplicación.

## Funcionamiento del Servidor

El servidor se ejecuta en un entorno de desarrollo en Node.js, y su configuración básica incluye la inicialización de Express, la configuración de rutas, y el manejo de autenticación y autorización.

-Inicio del Servidor: Al iniciar el servidor (mediante el comando npm start), se carga la configuración de Express, se establece la conexión con MySQL, se configuran las rutas necesarias, y se inicia la escucha en el puerto especificado (generalmente el puerto 3000).

-Manejo de Rutas: Las rutas están configuradas en archivos como routes/estudiantes.js y routes/usuarios.js. Cada ruta define un endpoint específico, como /estudiantes, /usuarios/login, etc., que se asocian con funciones en los controladores correspondientes.

-Controladores: Ubicados en controllers/, los controladores contienen la lógica para manejar las solicitudes entrantes. Por ejemplo, estudiantesController.js maneja la creación, lectura, actualización y eliminación de registros de estudiantes.

-Vistas Dinámicas: El servidor utiliza EJS para renderizar vistas dinámicas. Cuando un usuario accede a la aplicación, el servidor usa plantillas EJS para generar HTML con los datos actuales de estudiantes o usuarios y los envía al cliente.

## Vistas Creadas

-index.ejs: Vista principal que muestra la lista completa de estudiantes. Incluye opciones para agregar, editar y eliminar estudiantes, así como botones para otras búsquedas según la carrera.

-agregar.ejs: Proporciona un formulario para agregar un nuevo estudiante. Incluye campos para nombre, cédula, edad, carrera, correo, inscripción y deuda.

-detalle.ejs: Muestra los detalles de un estudiante específico con toda la información organizada.

-editar.ejs: Permite editar los detalles de un estudiante existente, con campos pre-rellenados. Los cambios se actualizan en la base de datos.

-estudiantescarreras.ejs: Muestra a los estudiantes que pertenecen a una carrera específica, filtrando los datos desde la base de datos MySQL.

-deudas.ejs: Muestra a los estudiantes con deudas, resaltando los montos adeudados en una tabla.

-inscritos.ejs: Lista a todos los estudiantes que están inscritos.

-usuarios.ejs: Muestra una lista de todos los usuarios registrados, incluyendo detalles como el nombre de usuario y el rol asignado.

-accesoDenegado.ejs: Muestra un mensaje cuando el acceso a una ruta o acción es denegado debido a permisos insuficientes.

Derechos Reservados
© 2024 Rhonny Andres Jaimes Gonzalez C.I. 29.718.095
