import React from 'react'

function ContainerBtn({name}) {
  return (
    <div className='flex px-2 py-3 rounded-2xl'>
        <button className='bg-slate-300 py-1 px-3  border border-black rounded-lg mr-6 text-black '>{name}</button>
    </div> 
  )
}

export default ContainerBtn