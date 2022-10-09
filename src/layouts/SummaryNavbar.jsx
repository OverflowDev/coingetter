import React from 'react'

function SummaryNavbar() {
  return (
    <div className='overflow-hidden bg-summary bg-opacity-10 md:w-full w-auto py-3 px-14 flex flex-wrap items-center justify-between '>

        <div className='flex space-x-6'>
            <div className='flex space-x-3'>
                <h1>Cryptos:</h1>
                <h2 className='text-green'>20,385</h2>
            </div>
            <div className='flex space-x-3'>
                <h1>Exchanges:  </h1>
                <h2 className='text-green'>20,385</h2>
            </div>
            <div className='flex space-x-3'>
                <h1>Market Cap:  </h1>
                <h2 className='text-green'>20,385</h2>
            </div>
            <div className='flex space-x-3'>
                <h1>24h Vol:  </h1>
                <h2 className='text-green'>20,385</h2>
            </div>
            <div className='flex space-x-3'>
                <h1>Dominance:  </h1>
                <h2 className='text-green'>
                    BTC <span>37.4%</span>
                </h2>
                <h2 className='text-green'>
                    ETH <span>18.6%</span>
                </h2>
                <h2 className='text-green'>
                    Gas: <span>100 GWEI</span>
                </h2>
            </div>
        </div>


        {/* Login and SignUp  */}
        <div className='flex gap-2'>
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