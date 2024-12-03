// importación dependencias necesarias 
import express from 'express';
import routes from "./src/routes/index.js"
import cors from "cors"
import dotenv from "dotenv"
import { connectionDb } from "./src/config/db.js"
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
app.use('/', routes)
connectionDb()

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`working on the port ${port}`)
})