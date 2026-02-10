import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className=' h-11/12  flex w-full  bg-gray-100 text-black'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body