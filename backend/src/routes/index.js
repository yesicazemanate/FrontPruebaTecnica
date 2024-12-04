import contactRoute from '../routes/contact.routes.js'
import userRoute from '../routes/user.routes.js'
import express from 'express'
const route = express.Router()
route.use('/contact', contactRoute)
route.use('/user', userRoute)
export default route