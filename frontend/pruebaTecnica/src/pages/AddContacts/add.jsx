import React, { useContext, useEffect, useState } from 'react'
import { Formulario } from '../../components/form'
import Layout from '../../layouts/layouts'
import axios from 'axios'

import { contextAdd } from '../../context/formAdd'
const Add = () => {

  const api= import.meta.env.VITE_URL_API
  const [name, setName]=useState()
  const [phone,setPhone]= useState()
  const[email, setEmail]=useState()
  const {state, setState}=useContext(contextAdd)
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
console.log(state)
const onState=()=>{
  state(true)
}

  return (
    <Layout>
      <div className=''>
        <h1 className='text-5xl justify-center text-center'>FORMULARIO DE REGISTRO DE CONTACTO</h1>
      <Formulario 
      name={name} 
      setName={setName}
      phone={phone}
      setPhone={setPhone}
      email={email}
      setEmail={setEmail}
      state={state}
      setState={setState}
      onState={onState}
      Confirmations={Confirmations}
      insert={insert}/>
      </div>
    </Layout>
  )
}

export default Add
