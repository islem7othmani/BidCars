import React from 'react'

function Filter() {
  return (
    <div className='bg-gray-200 absolute bottom-20 left-20  h-28 w-auto px-4 rounded-lg'>
      <div className='flex space-x-4 relative top-1/4'>
        <div className='grid grid-cols-1'><label className='font-bold shadow-xl'>Mark</label><input type="mark" className='bg-gray-50 rounded-lg h-8 border border-gray-300' /></div>
        <div className='grid grid-cols-1'><label className='font-bold shadow-xl'>Model</label><input type="model" className='bg-gray-50 rounded-lg h-8 border border-gray-300' /></div>
        <div className='grid grid-cols-1'><label className='font-bold shadow-xl'>Location</label><input type="location" className='bg-gray-50 rounded-lg h-8 border border-gray-300' /></div>
        <button className='bg-yellow-200 py-2 px-4 rounded-lg font-bold shadow-xl'>submit</button>
      </div>
    </div>
  )
}

export default Filter