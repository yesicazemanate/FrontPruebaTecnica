import contactRoute from '../routes/contact.routes.js'

import express from 'express'
const route = express.Router()
route.use('/contact', contactRoute)

export default route