import React from 'react'
import { useSelector } from 'react-redux'

const AllRoute = () => {
  const routes = useSelector((state) => state.Route.routes)
  return (
    <div className='flex flex-col space-y-4'>
  <h3 className='font-medium text-xl'>All Routes</h3>
    </div>
  )
}

export default AllRoute