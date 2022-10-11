import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-wrap justify-center md:p-12 p-8'>
        <div className='mx-auto md:max-w-3xl'>
            <div className='text-center'>
                <h1 className='font-semibold leading-snug md:text-6xl text-4xl whitespace-pre-wrap'>
                    Live Cryptocurrency <span className='text-green'>Prices</span> and <span className='text-green'>Market Cap</span> 
                </h1>
            </div>
        </div>
        <div className='mx-auto max-w-5xl mt-2'>
            <p className='text-2xl text-center font-light dark:text-gray-500'>
                The market cap of all cryptocurrencies is at $1.03T, up <span className='text-green'>2.28%</span> in the last 24 hours. <Link to='/' className='underline'>Read More</Link>
            </p>
        </div>
    </div>
  )
}

export default Hero