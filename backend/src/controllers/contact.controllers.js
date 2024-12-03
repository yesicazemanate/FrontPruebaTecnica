import { ObjectId } from "mongodb";
import { connectionDb } from "../config/db.js";
const {db} = await connectionDb()
const createContact=async(req,res)=>{
    try{

const {name, phone, email}= req.body

if(!name || !phone || !email){
    return res.status(400).send('datos incompletos')
}
const contact={
    name,
    phone,
    email
}
const newContact = await db.collection('contacts').insertOne(contact)
res.status(201).json({ msg: 'Contacto creado con éxito', id: newContact.insertedId })
}catch(error){
    console.log('error al crear el contacto')
    return  res.status(500).json({msg:'error al crear el contacto',error:error})
}
}
const getContacts =async(req, res)=>{
try{
const contacts = await db.collection('contacts').find().toArray()
return res.status(200).json(contacts)
}catch(error){
    console.log('error al obtener los contactos')
    return res.status(500).json({msg:'error al obtener los contactos', error:error})
}
}
const getContact =async(req, res)=>{

    try{
        const {id}= req.headers
        const Id= new ObjectId(id)

    const contact = await db.collection('contacts').findOne({_id:Id})
    if(!contact){
        return res.status(400).send('Contacto no encontrado o no existe')
    }
    return res.status(200).json(contact)
    }catch(error){
        console.log('error al obtener el contacto')
        return res.status(500).json({msg:'error al obtener el contacto', error:error})
    }
    }
    const deleteContact=async(req, res)=>{
        try{
            const {id}= req.headers
            const Id= new ObjectId(id)
            const contact= await db.collection('contacts').deleteOne({_id:Id})
            if(!contact){
                return res.status(400).send('Contacto no se pudo elimnar no encontrado o no existe')
            }
            return res.status(200).send('contacto eliminado exitosamente')

        }catch(error){
            console.log('error al eliminar el contacto')
            return res.status(500).json({msg:'error al intentar eliminar el contacto', error:error})
        }
    }
const pacthContact=async(req, res)=>{
try{
    const {id}= req.headers
    const {name,phone,email}=req.body
    const Id= new ObjectId(id)
    const contact={
        name,
        phone,
        email
    }
    const updateContact= await db.collection('contacts').updateOne({_id:Id},{$set:contact})
    if(!updateContact){
        return res.status(400).send('Nose actualizo el contacto no existe')
    }
    res.status(200).json({msg:'contacto actualizado',data:updateContact})

}catch(error){
    console.log('error al actualizar el contacto')
            return res.status(500).json({msg:'error al intentar actualizar el contacto', error:error})
}
}
export {
    createContact,
    getContacts,
    getContact,
    deleteContact,
    pacthContact
}