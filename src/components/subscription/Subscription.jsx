import React from 'react'

function Subscription() {
  return (
    <div className='mt-6 px-14'>
        <div className="h-96 bg-green flex flex-col justify-center">
            <div className='mt-8 mx-auto max-w-2xl text-center'>
                <h2>Interested to stay up-to-date with cryptocurrencies?</h2>
                <h1 className='text-4xl'>Get the latest cryptocurrency news directly in your inbox.</h1>
            </div>
            <div className="pt-2 mt-8 flex flex-col items-center text-gray-500">
                <input className="bg-teal-100 h-12 w-1/4 px-4 text-sm focus:outline-none shadow-lg" placeholder="Enter your Email" />
                <button type="submit" className="bg-teal-50 hover:bg-teal-200 px-4 py-2 mt-3 shadow-inner">
                    Subscribe Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Subscription