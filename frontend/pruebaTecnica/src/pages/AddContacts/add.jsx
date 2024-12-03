import React, { useEffect, useState } from 'react'
import Confirmation from '../../components/confirmation'
import Layout from '../../layouts/layouts'
import axios from 'axios'
const Add = () => {

  const api= import.meta.env.VITE_URL_API
  const [name, setName]=useState()
  const [phone,setPhone]= useState()
  const[email, setEmail]=useState()
const [Confirmations, setConfirmation]=useState(false)
const insert=async(e)=>{
  e.preventDefault()
  try{
    const response=await axios.post(`${api}contact/createcontact`,{name,phone,email})
    console.log(response)
    setConfirmation(true)
    setTimeout(() => {
      setConfirmation(false);
    }, 3000);
    setName('')
    setPhone('')
    setEmail('')

  }catch(error){
    console.log('error ', error);
  }
}


  return (
    <Layout>
      <div className=''>
        <h1 className='text-5xl justify-center text-center'>FORMULARIO DE REGISTRO</h1>
        <form className='flex flex-col m-4 p-9 ' onSubmit={(e)=>insert(e)}>
          <div className='border-2 rounded-sm'>
          <div className='m-4'>
          <label htmlFor="">Nombre</label>
          <input 
          className='border-2 ml-3'
          type='text'
          value={name}
          onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='m-4 '>
          <label htmlFor=""> Télefono</label>
          <input
          className='border-2 ml-3'
          type='text'
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <div className='m-4'>
          <label htmlFor=""> Correo</label>
          <input
          className='border-2 ml-3'
          type='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          </div>
          {
            Confirmations &&(
             <Confirmation/> 
            )
          }
          <div className=' flex justify-center m-3 p-3 items-center'>
          <button type='submit' className='bg-sky-500 text-lg text-white w-min rounded-sm p-2 '>Guardar</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Add
