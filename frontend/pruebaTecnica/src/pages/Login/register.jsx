import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const FormRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[alert, setAlert]=useState(false)
  const navigate = useNavigate();
  const api= import.meta.env.VITE_URL_API

  const register=async(e)=>{
    e.preventDefault()
    try{
      const response=await axios.post(`${api}user/register`,{email,name, password})
      console.log(response)
      setEmail('')
      setName('')
      setPassword('')
      navigate('/')
  setAlert(false)
    }catch(error){
      console.log('error ', error);
setAlert(true)
setTimeout(() => {
    setAlert(false);
  }, 3000);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-9 m-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-center text-xl mb-6">Formulario de Registro</h2>

        <form className="registro-form flex flex-col justify-center items-center" onSubmit={register}>
          <div className="form-group m-4">
            <label className="font-semibold">Correo:</label>
            <input
              className="border-2 p-2 ml-3 rounded-sm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="form-group m-4">
            <label className="font-semibold">Nombre:</label>
            <input
              className="border-2 p-2 ml-3 rounded-sm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese su nombre"
            />
          </div>

          <div className="form-group m-4">
            <label className="font-semibold">Contraseña:</label>
            <input
              className="border-2 p-2 ml-3 rounded-sm"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
             className="bg-sky-500 text-lg text-white w-min rounded-sm p-2 mt-4">
          
            Registrar
         
          </button>
      
        </form>
        {alert&&(
            <div className="p-4 mb-6 bg-blue-500 text-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium">Usuario no registrado</h3>
            </div>
        )}
        
      </div>
      </div>
      
    </>
  );
};

export default FormRegister;