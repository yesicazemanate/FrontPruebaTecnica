import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import menus from "../assets/menus.png"
const Sidbar = () => {
    const [open, isOpen]= useState(true)
  return (
    <>
    <div className='flex'>
     <div className={`bg-blue-200 top-0 left-0  h-screen m-2  rounded-md fixed  ${open ? 'w-1/4' :'w-1/12'}`}>
        
        <div 
         onClick={()=>{
            isOpen(!open)
        }}>
            <img 
        src={menus}
        className='w-6 h-6 top-0'
        />
       
        </div>
        {open? ( 
            <><Link to="/add">
        <div className='bg-blue-200 rounded-sm m-2 hover:bg-blue-400 mt-20'>
            Agregar Contacto
        </div>
        </Link>
        <Link to="/list">
        <div className='bg-blue-200 rounded-sm m-2 hover:bg-blue-400 mt-14'>
            Ver Contactos
        </div>
        </Link></>):(<div></div>)}
      
      
        </div>
        </div> 
    </>
  )
}

export default Sidbar
