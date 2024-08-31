import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

const Index = () => {
  return (
    <div>
        <Routes>
            <Route element={<Dashboard/>} path='/'/>
        </Routes>
    </div>
  )
}

export default Index