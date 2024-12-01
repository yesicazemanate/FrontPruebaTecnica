import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" />
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
