import { DecodeToken, login, register } from "../controllers/user.controllers.js";
import express from 'express'
const route = express.Router()

route.post('/register', register)
route.post('/login',login)
route.post('/decode',DecodeToken)

export default route