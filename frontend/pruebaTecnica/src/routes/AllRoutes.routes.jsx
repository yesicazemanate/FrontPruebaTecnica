import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import Add from "../pages/AddContacts/add";
import List from "../pages/ListContacts/list";
const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<List/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
