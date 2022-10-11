import React from 'react'

function SummaryNavbar() {
  return (
    <div className='overflow-hidden dark:bg-summary bg-dark dark:bg-opacity-10 bg-opacity-10 py-3 md:px-14 px-4 flex items-center justify-between '>

        <div className='md:flex grid grid-cols-2 gap-2 md:space-x-10 border-2 md:px-0 px-3'>
            <div className='flex space-x-2'>
                <h1>Cryptos:</h1>
                <h2 className='dark:text-green text-deepGreen font-semibold'>20,385</h2>
            </div>
            <div className='flex space-x-2 border'>
                <h1>Exchanges:  </h1>
                <h2 className='dark:text-green text-deepGreen font-semibold'>20,385</h2>
            </div>
            <div className='flex space-x-2'>
                <h1>Market Cap:  </h1>
                <h2 className='dark:text-green text-deepGreen font-semibold'>20,385</h2>
            </div>
            <div className='flex space-x-2'>
                <h1>24h Vol:  </h1>
                <h2 className='dark:text-green text-deepGreen font-semibold'>20,385</h2>
            </div>
            <div className='col-span-2 flex space-x-2'>
                <h1>Dominance:  </h1>
                <h2 className='dark:text-green text-deepGreen font-semibold'>
                    BTC <span>37.4%</span>
                </h2>
                <h2 className='dark:text-green text-deepGreen font-semibold'>
                    ETH <span>18.6%</span>
                </h2>
                <h2 className='dark:text-green text-deepGreen font-semibold'>
                    Gas: <span>100 GWEI</span>
                </h2>
            </div>
        </div>
        
        {/* Login and SignUp  */}
        <div className='md:flex gap-2 hidden'>
            <button className='py-2 flex items-center px-6  border-2 border-green'>
                Log In
            </button>
            <button className='py-2 flex items-center px-6 border-none bg-green'>
                Sign Up
            </button>
        </div>

    </div>
  )
}

export default SummaryNavbar