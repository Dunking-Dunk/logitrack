import React from 'react'
import  DataTable  from '@/components/global/DataTable'
import { busColumns } from '@/lib/columns'

function AllBus() {
    const buses = []

  return (
<div className='flex flex-col space-y-4'>
      <h1 className='font-semibold text-4xl'>All Buses</h1>
     <DataTable columns={busColumns} data={buses} filterColumn='busName' />
      </div>
    )
  }


  export default AllBus