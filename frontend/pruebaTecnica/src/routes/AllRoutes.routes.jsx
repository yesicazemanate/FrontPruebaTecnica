import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import Add from "../pages/AddContacts/add";
import List from "../pages/ListContacts/list";
import Edit from "../components/updateContact"
import Register from "../pages/Login/register"
import Login from "../pages/Login/login"
const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
