import React from 'react'
import editar from '../assets/editar-texto.png'
import eliminar from '../assets/basura.png'
const CardContact = () => {
  return (
    <div className='flex border-2 w-3/4 m-2'>
     
        <div className='flex flex-col m-3'>
      <div>Nombre</div>
      <div>Teléfono</div>
      <div>Correo</div>
      </div>
      <div className=' ml-auto m-3 items-center'>
        <img src={editar} alt=""  className='w-6 h-6 '/>
        <img src={eliminar} className='w-6 h-6'/>
      </div>
     
    </div>
  )
}

export default CardContact
