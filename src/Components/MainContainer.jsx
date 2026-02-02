import React from 'react'
import ContainerBtn from './ContainerBtn'
import VideoContainer from './VideoContainer'

function MainContainer() {
  return (
    <div className='flex-10/12 border ml-4 p-2 '>
        <ContainerBtn />
        <VideoContainer />
    </div>
  )
}

export default MainContainer