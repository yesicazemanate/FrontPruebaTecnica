import bcrypt  from 'bcryptjs'
const encryPassword= async(password)=>{

    const salt= await bcrypt.genSalt(10)
    const encry= await bcrypt.hash(password,salt)
    return encry
}
const comparePassword = async(entryPassword, password)=>{
   
    return await bcrypt.compare(entryPassword, password)
}

export {
    comparePassword,
    encryPassword
}