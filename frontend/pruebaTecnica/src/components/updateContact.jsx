import React, { useContext, useState } from 'react'
import Layout from '../layouts/layouts'
import { Formulario } from './formulario'
import axios from 'axios'
import { contextAdd } from '../context/formAdd'
import { useParams } from 'react-router-dom'

const UpdateContact = () => {

    const api= import.meta.env.VITE_URL_API
  const [name, setName]=useState()
  const [phone,setPhone]= useState()
  const[email, setEmail]=useState()
  const {state, setState}=useContext(contextAdd)
const [Confirmatio, setConfirmatio]=useState(false)
const ids= useParams().id
console.log(ids)
const update = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${api}contact/updatecontact/${ids}`, {    
        name,
        phone,
        email,
      });
      
      console.log('Respuesta de actualización:', response);

      setConfirmatio(true);
      setState(true)
      setTimeout(() => {
        setConfirmatio(false);
        
      }, 1000);
  
      setName('');
      setPhone('');
      setEmail('');
  
    } catch (error) {
      console.error('Error al actualizar el contacto:', error);
    }
  };
  return (
    <Layout>
    <div className=''>
      <h1 className='text-5xl justify-center text-center'>FORMULARIO DE ACTUALIZAR</h1>
    <Formulario 
    name={name} 
    setName={setName}
    phone={phone}
    setPhone={setPhone}
    email={email}
    setEmail={setEmail}
    Confirmatio={Confirmatio}
    update={update}/>
    </div>
  </Layout>
  )
}

export default UpdateContact
