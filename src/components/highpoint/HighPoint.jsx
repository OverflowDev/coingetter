import React from 'react'

// import Ads from './Ads'
import TopGainer from './TopGainer'
import Trending from './Trending'

import ads from '../../assets/svg/ads.svg'

function HighPoint() {
  return (
    <div className='mt-6 md:px-14 px-4'>
        <h1 className='text-lg font-bold mb-4'>HighPoint</h1>
        <div className="flex justify-center">
            <div className='md:flex grid grid-cols-1 md:space-y-0 space-y-3 md:space-x-5 w-full'>
                <div className=' rounded shadow-inner
                    dark:bg-gradient-to-br dark:from-red-500 dark:via-gray-800 
                    bg-gradient-to-br from-red-500 via-gray-800 
                    md:p-[0.8px]
                    md:h-64 md:w-11/12'
                >
                    <div className='h-full w-full dark:bg-gray-800 bg-gray-600 rounded shadow-inner'>
                        <Trending />
                    </div>
                </div>
                <div className='rounded shadow-inner
                    dark:bg-gradient-to-br dark:from-green dark:via-transparent dark:to-transparent 
                    bg-gradient-to-br from-green via-transparent to-transparent 
                    p-[0.8px]
                    md:h-64 md:w-11/12'
                >
                    <div className='rounded h-full w-full dark:bg-gray-800 bg-gray-600 shadow-inner'>
                        <TopGainer />
                    </div>
                </div>
                {/* <div className='rounded
                    bg-gradient-to-r from-green via-transparent to-transparent p-[1px]
                    h-64 w-11/12'
                > */}
                    <div className='rounded md:h-64 md:w-11/12 dark:bg-gray-800 bg-gray-200 shadow-inner'>
                        {/* <Ads /> */}
                        <img src={ads} alt="" className='object-cover h-64 w-full rounded' />
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default HighPoint