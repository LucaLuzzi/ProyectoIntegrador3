import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Stock from '../Pages/Stock.jsx'
import { Index } from '../Pages/index.jsx'

export const AppRouter = () => {
  return (

        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/Stock" element={<Stock/>}/>
            <Route path="*" element={<h1>No encontrado - error 404</h1>}/>
        </Routes>

  )
}