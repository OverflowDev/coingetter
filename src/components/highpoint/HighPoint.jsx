import React from 'react'

import Ads from './Ads'
import TopGainer from './TopGainer'
import Trending from './Trending'

import ads from '../../assets/svg/ads.svg'

function HighPoint() {
  return (
    <div className='mt-6 px-14'>
        <h1 className='text-lg mb-4'>HighPoint</h1>
        <div className='flex space-x-5'>
            <div className=' rounded shadow-inner
                bg-gradient-to-br from-red-500 via-gray-800 p-[0.8px]
                h-64 w-11/12'
            >
                <div className='h-full w-full bg-gray-800 rounded shadow-inner'>
                    <Trending />
                </div>
            </div>
            <div className='rounded shadow-inner
                bg-gradient-to-br from-green via-transparent to-transparent p-[0.8px]
                h-64 w-11/12'
            >
                <div className='rounded h-full w-full bg-gray-800 shadow-inner'>
                    <TopGainer />
                </div>
            </div>
            {/* <div className='rounded
                bg-gradient-to-r from-green via-transparent to-transparent p-[1px]
                h-64 w-11/12'
            > */}
                <div className='rounded h-64 w-11/12 bg-gray-800 shadow-inner'>
                    {/* <Ads /> */}
                    <img src={ads} alt="" className='object-cover h-64 w-full rounded' />
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default HighPoint