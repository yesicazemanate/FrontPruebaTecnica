# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Frontend
Este proyecto es el frontend que interactúa con el backend para gestionar usuarios y contactos. Utiliza React + Vite para la interfaz de usuario y Axios para las peticiones HTTP. 

## Tabla de Contenidos
- Instalación
- Uso
- Estructura del proyecto


## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yesicazemanate/PruebaTecnica.git

2. navega
navega a la carpeta frontend (cd frontend),
una vez allí navega a la carpeta pruebaTecnica (cd pruebaTecnica)

3. Instalación de dependencias 
-si utilizas npm:
    npm install
-si utilizas yarn:
    yarn start

4. configura las variables de entorno
VITE_URL_API=http://localhost:3000/

5. Inicia el servidor
-si utilizas npm:
  npm run dev 
-si utilizas yarn:
  yarn dev


## Uso
1.Registrar Usuario
El formulario de registro permite al usuario crear una cuenta proporcionando un nombre, correo electrónico y contraseña. Los datos se envían al backend para ser registrados en la base de datos.
RUTA: http://localhost:5173/register

1.Inicio de sesión 
El formulario de inicio de sesión permite a los usuarios autenticarse usando su correo electrónico y contraseña. El backend devuelve un token JWT que se almacena en las cookies para futuras peticiones.
RUTA: http://localhost:5173/


2.Gestionar contactos
 -Crear un contacto
 Este formulario permitira agregar un contacto mas a tu lista, agregando el nombre, el correo y el número de teléfono.
 RUTA: http://localhost:5173/add

 -Listar los contactos
 Aqui encontraras la lista de los contactos, ademas una barra de busqueda para filtrar de por nombre o teléfono el contacto deseado.
 En cada contacto podras encontrar un icono de un bote de basura para eliminar y un icino de un lapiz para editar.
 RUTA: http://localhost:5173/list

-editar los contactos 
Este formulario permitira editar un contacto de tu lista, agregando el nombre, el correo y el número de teléfono.
RUTA : http://localhost:5173/edit/6750c841aab34dc07c3351ad (este es el identificador único del contacto que quieras editar)


## estructura básica del proyecto
/frontend/pruebaTecnica
|--/public
|--/src
|--/--/assets
|--/--/components
|--/--/context
|--/--/pages
|--/--/routes
|--App.css
|--App.jsx
|--index.css
|--main.css
|--.env
|--.gitignore
|-- package.json      
|-- README.md  
|-- vite.config.js

