import { verifyToken } from "../utils/jwt.js";

export const checkJwt = (req, res, next)=>{
    try{
const jwtUser = req.headers.authorization || null;
if(!jwtUser){
    return res.status(401).json({message:' no token provided'})

}
const jwt= jwtUser.split(' ')[1]
console.log(jwt)
const verify= verifyToken(jwt)

if(!verify){
    return res.status(401).json({message:'you do not have a valid login'})
}else{

    console.log('token valid', verify)

    
    next()
}
    }catch(error){
        console.log('Error in JWT middleware',error)
        res.status(500).json({error:'server error', msg :error.message})
    }
}