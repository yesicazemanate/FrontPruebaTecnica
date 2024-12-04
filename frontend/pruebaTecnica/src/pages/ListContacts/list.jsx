import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/layouts'
import CardContact from '../../components/cardContact'
import axios from 'axios'
const api= import.meta.env.VITE_URL_API
const list = () => {
  const [data, setData]=useState([])
  const [search, setSearch]= useState()
  const getContact=async()=>{
    try{
      const response= await axios.get(`${api}contact/getcontacts`)
      //console.log(response)
      const orderData= [...response.data].sort((a,b)=>{
        if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        }
        return 0
      })
      
      setData(orderData)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
getContact()
  },[])
const searchS=async(e)=>{
  const value = e.target.value.trim().toLowerCase()
  setSearch(value);

if(value.length <2){
  getContact()
}else if(value.length >2 || value.length ==3 ) {
  const filteredData = data.filter((datas) =>
    datas.name.toLowerCase().includes(search) ||
  datas.phone.toString().toLowerCase().includes(search)
  );
  setData(filteredData)
}
}
//console.log(search)
  return (
    <Layout>
    <div className=' '>
      <h1 className='text-5xl justify-center text-center'>LISTA DE CONTACTOS</h1>
      <div className='flex justify-center'>
      <input
      className='border-black border-2 w-3/4 justify-center'
      type='text' value={search} onChange={(e)=>searchS(e)} />
      </div>
      {
        data && data.map((data)=>(

<CardContact  key={data._id} 
          name={data.name}
          phone={data.phone}
          email={data.email}
          id={data._id}/>
        ))
      }
    </div>
    </Layout>
  )
}

export default list
