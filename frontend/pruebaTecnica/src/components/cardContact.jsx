import React, { useState, useContext } from 'react'
import editar from '../assets/editar-texto.png'
import eliminar from '../assets/basura.png'
import ModalDelete from './modalDelete'
import {contextAdd} from '../context/formAdd'
import { Link } from 'react-router-dom'
const CardContact = ({name, phone, email,id}) => {
  const [deleteConfir, setDeleteConfir]= useState(false)
  const {state,setState}=useContext(contextAdd)
 const stateAdd=()=>{
  setState(false)
 }
  return (
    <>
    <div className='flex border-2 w-3/4 m-2'>
     
        <div className='flex flex-col m-3'>
      <div>{name}</div>
      <div>{phone}</div>
      <div>{email}</div>
      </div>
      <div className=' ml-auto m-3 items-center'>
        <Link to={`/edit/${id}`}>
        <img src={editar} alt=""  className='w-6 h-6 ' onClick={stateAdd}/>
        </Link>
        <img src={eliminar} className='w-6 h-6' onClick={()=>setDeleteConfir(true)}/>
      </div>
     
    </div>
    {
      deleteConfir&&(
        <ModalDelete 
        deleteConfir={deleteConfir} 
        setDeleteConfir={setDeleteConfir} 
        name={name} 
        id={id}/>
  )
     }
    </>
  )
}

export default CardContact
