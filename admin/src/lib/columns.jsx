import React from 'react'
import AlertDialog from '@/components/global/AlertDialogue'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {Link} from 'react-router-dom'

export const busColumns = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "busName",
      header: 'Bus Name'
    },
    {
      accessorKey: "busNumber",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Bus Number
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      }
    },
  
    {
      accessorKey: "busSet",
      header: "Bus Set",
    },
  
    {
      accessorKey: "origin",
      header: "Origin",
    },
    {
      accessorKey: "seats",
      header: "Total Seats",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => {
        const id = row.getValue('id');
  
        return (
          <div className='flex space-x-4 items-center'>
            <Link href={`/bus/${id}`} className='bg-secondary  h-full py-2 px-4 rounded-lg'>View</Link>
            <Link href={`/bus/update/${id}`} className='bg-secondary  h-full py-2 px-4 rounded-lg'>Update</Link>
            <AlertDialog content='The following will be permanently deleted' onClick={async () => {
            //   store.dispatch(deleteBus(id))
            }}>
              Delete
            </AlertDialog>
          </div>
        )
      }
    }
  ]