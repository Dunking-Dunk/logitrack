import { Dashboard } from '@/pages/Dashboard'
import Main from '@/pages/Main'
import { Routes, Route } from 'react-router-dom'

export const AllRoutes = () => {
  return (
    <Routes>
         <Route element={<Main />} path='/' /> :   <Route element={<Login />} path='/login' />  
         <Route element={<Dashboard />} path='/dashboard' />
    </Routes>
  )
}
