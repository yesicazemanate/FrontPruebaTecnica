import React from 'react'
import axios from 'axios'
const api= import.meta.env.VITE_URL_API
const modalDelete = ({deleteConfir,setDeleteConfir, name, id}) => {
    const deleteContact=async()=>{
        try{
            const response = await axios.delete(`${api}contact/deletecontact/${id}`)
            console.log(response)
            setDeleteConfir(false) 
        }catch(error){
            console.log(error)
        }

    }
  return (
    <div>
       <div className="p-4 mb-6 bg-blue-300 text-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium">{`¡Seguro que desea eliminar a ${name}!`}</h3>
              <button type='submit' className='bg-red-400 text-lg text-black w-min rounded-sm p-2 m-2' 
              onClick={()=>setDeleteConfir(false)}>Cancelar</button>
              <button type='submit' className='bg-blue-400 text-lg text-black w-min rounded-sm p-2 m-2 ' onClick={deleteContact}>Eliminar</button>
            </div>

    </div>
  )
}

export default modalDelete
