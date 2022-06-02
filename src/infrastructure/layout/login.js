import React from 'react'
import Unauthorized from "../unauthorized/Login";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

export default function login() {
  return (
    <>
    <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>,
    </>
  )
}
