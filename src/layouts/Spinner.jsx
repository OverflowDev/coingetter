import React from 'react'

function Spinner() {
  return (
    <div className=''>
        <div className="bg-white flex space-x-12 p-12 justify-center items-center">
            <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
            <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
            <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Spinner