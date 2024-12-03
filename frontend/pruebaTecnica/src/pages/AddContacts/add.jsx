import React from 'react'
import Layout from '../../layouts/layouts'
const Add = () => {
  return (
    <Layout>
      <div className=''>
        <h1 className='text-5xl justify-center text-center'>FORMULARIO DE REGISTRO</h1>
        <form className='flex flex-col m-4 p-9 '>
          <div className='border-2 rounded-sm'>
          <div className='m-4'>
          <label htmlFor=""> Nombre</label>
          <input 
          className='border-2 ml-3'
          type='text'/>
          </div>
          <div className='m-4 '>
          <label htmlFor=""> Télefono</label>
          <input
          className='border-2 ml-3'
          type='text'/>
          </div>
          <div className='m-4'>
          <label htmlFor=""> Correo</label>
          <input
          className='border-2 ml-3'
          type='email'/>
          </div>
          </div>
          <div className=' flex justify-center m-3 p-3 items-center'>
          <button className='bg-sky-500 text-lg text-white w-min rounded-sm p-2 '>Guardar</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Add
