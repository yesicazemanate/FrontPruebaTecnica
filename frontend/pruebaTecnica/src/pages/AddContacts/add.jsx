import React from 'react'
import Layout from '../../layouts/layouts'
const Add = () => {
  return (
    <Layout>
      <div className='border-solid'>
        <h1 className='text-5xl justify-center text-center'>FORMULARIO DE REGISTRO</h1>
        <form className='flex flex-col m-4 p-9'>
          <div className=''>
          <label htmlFor=""> Nombre</label>
          <input
          type='text'/>
          </div>
          <div>
          <label htmlFor=""> Télefono</label>
          <input
          type='text'/>
          </div>
          <div>
          <label htmlFor=""> Correo</label>
          <input
          type='email'/>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Add
