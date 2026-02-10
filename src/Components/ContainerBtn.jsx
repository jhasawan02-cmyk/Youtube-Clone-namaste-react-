import React from 'react'

function ContainerBtn({name}) {
  return (
    <div className='flex py-1 rounded-2xl  flex-wrap'>
        <button className='bg-slate-300  px-3  border border-black rounded-lg  text-black hover:bg-slate-100 cursor-pointer'>{name}</button>
    </div> 
  )
}

export default ContainerBtn