// importación dependencias necesarias 
import express from  "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.json())
// se crea un objeto para contener las configuraciones de los cors 
const corsOption={
    // lista de los dominios permitidos para acceder al servidor 
    origin:[' http://localhost:5173/'],
    // especifica los metodos permitidos para las solicitudes
    methods:['GET','POST', 'DELETE', 'PATCH', 'PUT'],
    //las solicitudes puedes incluir credenciales como cookies o autentificación
    credentials:true
}
// Habilitación de cors
app.use(cors(corsOption))