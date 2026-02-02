import React from 'react'

function ContainerBtn() {
  return (
    <div className='border rounded-md flex p-1 bg-gray-800'>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit '>All</button>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit'>Drama</button>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit'>Live</button>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit'>Mixes</button>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit'>Movies</button>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit'>Recently Uploaded</button>
        <button className='text-2xl  text-white w-auto  border-white p-0.5 border-2 rounded mr-6 max-h-fit'>New to you</button>
    </div>
    {// will need to make dynamic buttons }
  )
}

export default ContainerBtn