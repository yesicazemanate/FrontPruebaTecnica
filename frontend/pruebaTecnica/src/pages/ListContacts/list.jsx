import React from 'react'
import Layout from '../../layouts/layouts'
import CardContact from '../../components/cardContact'
const list = () => {
  return (
    <Layout>
    <div className=' '>
      <h1 className='text-5xl justify-center text-center'>LISTA DE CONTACTOS</h1>
      <div className='flex justify-center'>
      <input
      className='border-black border-2 w-3/4 justify-center'
      type='text'/>
      </div>
<CardContact />
    </div>
    </Layout>
  )
}

export default list
