import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

function Body() {
  return (
    <div className=' h-11/12  flex w-full  bg-gray-100 text-black'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body