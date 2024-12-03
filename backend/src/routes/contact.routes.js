import { createContact, getContacts, getContact, deleteContact, pacthContact } from "../controllers/contact.controllers.js";
import express from 'express'
const route = express.Router()

route.post('/createcontact', createContact)
route.get('/getcontacts',getContacts)
route.get('/getcontact',getContact)
route.delete('/deletecontact/:id', deleteContact)
route.patch('/updatecontact/:id', pacthContact)


export default route
