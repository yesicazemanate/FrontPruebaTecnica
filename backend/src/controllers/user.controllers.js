
import { connectionDb } from "../config/db.js";
const {db} = await connectionDb()
import {encryPassword, comparePassword} from '../utils/bcrypt.js'
import { generateToken,verifyToken } from "../utils/jwt.js";
export const register =async(req, res)=>{
    try{
    const {email,name, password}= req.body
    const passHash=await encryPassword(password)
    const data={
email,
name,
password:passHash
    }
    const newUser = await db.collection('users').insertOne(data)
res.status(200).send(newUser)
console.log('user register')
    }catch(error){
        console.log(error)
    }

}
export const login = async(req, res)=>{
    try{
        const {email, password}= req.body
        const user = await db.collection('users').findOne({email:email})
        if(!user){
           return res.status(404).json({ error: 'Usuario no encontrado' })
        }
        const passHash= await comparePassword(password, user.password)
        if(!passHash){
            return res.status(404).json({ error: 'Usuario no encontrado' })
        }
        const token = generateToken(user)
        res.status(200).json({
            message: 'Login successful',
            token})   
    }catch(error){
        return res.status(500).send(error)
    }
   

}
export const DecodeToken =async(req, res)=>{
    const header = req.headers['authorization'];
    if (!header) {
        return res.status(401).send({ msg: 'No token provided' });
      }
    
      const token = header.split(' ')[1]
    try{
const decodeToken = verifyToken(token)
if (!decodeToken) {
    return res.status(403).send({ msg: 'Invalid token' });
  }
res.send(decodeToken)
    }catch(error){
res.status(500).send({msg:error})
    }
}