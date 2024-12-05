## Backend
Este proyecto incluye un backend que proporciona un CRUD para dos colecciones: 'User' y 'Contacts' 

## Tabla de Contenidos
- Instalación
- Uso
- Estructura del proyecto


## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yesicazemanate/PruebaTecnica.git

2. navega
navega a la carpeta backend (cd backend)

3. Instalación de dependencias 
-si utilizas npm:
    npm install
-si utilizas yarn:
    yarn start

4. configura las variables de entorno

 PORT = 3000
URL_DB = mongodb+srv://yemaze123yz:pq1HRTV8ClXDAwCU@cluster0.aal8u.mongodb.net/
JWT_SECRET = claveSecreta
NAME_DB = Contacto

5. Inicia el servidor
-si utilizas npm:
npm run dev 
-si utilizas yarn:
yarn dev


## Uso
1.user collection
- para registrar un usuario 
RUTA: POST http://localhost:3000/user/register/
BODY:
{
    "email":"ejemplo@gmail.com",
    "name":"ejemplo",
    "password":"ejemplo1233"
}
-Para Inicio de sesión 
RUTA: POST http://localhost:3000/user/login/
BODY:
{
    "email":"ejemplo@gmail.com",
    "password":"ejemplo1233"
}

2. Contact collection 

-Crear un contacto 
RUTA: POST http://localhost:3000/contact/createcontact/
BODY:
{
    "name":"marta",
    "phone":"3214567687",
    "email":"ejemplo@gmail.com"
}

-Obtener todos los contactos 
RUTA: GEThttp://localhost:3000/contact/getcontacts/

-Obtener un contacto 
RUTA: GET http://localhost:3000/contact/getcontact/'iddeseado'

-Eliminar un contacto
RUTA: DELETE http://localhost:3000/contact/deletecontact/'idDeseado'

-Actualizar un contacto
RUTA: PATCH http://localhost:3000/contact/getcontact/674ea97a04dbf10a5c2364b4

## estructura básica del proyecto
/backend
|--/config
|--/controllers
|--/middleware
|--/models
|--/routes
|--/utils
|--app.js
|--.env
|--.gitignore
|-- package.json      
|-- README.md         


