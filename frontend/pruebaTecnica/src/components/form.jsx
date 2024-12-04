import React from 'react'
import Confirmation from './confirmation'
import ConfirmationUpdate from './confirmationUpdate'
import { Link } from 'react-router-dom'
export const Formulario = ({name,setName,phone, setPhone, email, setEmail, state,setState, Confirmations,onState ,insert, update, Confirmatio}) => {
const handleSubmit=(e)=>{
    if(state){

        insert(e)
    }else{
        update(e)
    }
}
  return (
    <div>
        <form className='flex flex-col m-4 p-9 ' onSubmit={(e)=>handleSubmit(e)}>
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
             state?(
                
                    Confirmations&&(
                        <Confirmation/>
                    )
                
             
            ):(
                Confirmatio&&(
                    <ConfirmationUpdate/>
                )
             
            )
          }
          
          <div className=' flex justify-center m-3 p-3 items-center'>
            {state?(
 <button type='submit' className='bg-sky-500 text-lg text-white w-min rounded-sm p-2 '>Guardar</button>
            ):(
              <>
              <button type='submit' className='bg-sky-500 text-lg text-white w-min rounded-sm p-2 '>Actualizar</button>
              <Link to={'/list'} type='submit' 
              className='bg-red-500 text-lg text-white w-min rounded-sm p-2 ml-2'
              onClick={onState} >Cancelar</Link>
              </>
            )}
          
         
          </div>
        </form>
    </div>
  )
}

