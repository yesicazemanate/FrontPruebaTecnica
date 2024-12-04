import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="p-9 m-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-center text-xl mb-6">INICIAR SESIÓN</h2>

        <form className="registro-form flex flex-col justify-center items-center">
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
            className="bg-sky-500 text-lg text-white w-max rounded-sm p-2 mt-4 "
          >
            Iniciar Sesión
          </button>
        </form>
        <Link to={'/register'}> ¡No tienes cuenta REGISTRATE</Link>
      </div>
      </div>
    </>
  );
};

export default FormLogin;