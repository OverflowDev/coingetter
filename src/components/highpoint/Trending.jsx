import React from 'react'

function Trending() {
  return (
    <div>
        <div className='flex items-center justify-between p-4'>
            <div>
                <button className='py-2 px-3 bg-teal-200 hover:bg-opacity-80'>
                    <div className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#D10404" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg> 
                        <h1 className='font-semibold text-teal-800 tracking-wider'>Trending</h1>
                    </div>
                </button>
                <button className='py-2 px-3'>
                    <div className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B400" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <h1 className='font-semibold text-white hover:text-gray-300 tracking-wider'>Newly Added</h1>
                    </div>
                </button>
            </div>

            <div>
                <button className='py-2 px-3'>
                    <h1 className='font-semibold text-green hover:text-teal-200 tracking-wider'>View All</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Trending