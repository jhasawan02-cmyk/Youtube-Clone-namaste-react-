import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex w-full  overflow-hidden bg-gray-100 text-black'>
      <Sidebar />
      <main className="flex-1  overflow-y-auto">
        <Outlet />
      </main>

    </div>
  )
}

export default Body