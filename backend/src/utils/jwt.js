import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const generateToken = (user)=>{
    const payload={
        id: user._id,
        correo: user.email
    }
    
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1d'})
} 
const verifyToken=(token)=>{
    try{
const isVerify= jwt.verify(token, process.env.JWT_SECRET)
return isVerify
    }catch(error){
        console.error('token verification failed', error)
        return null
    }
}
export {
    generateToken,
    verifyToken
}