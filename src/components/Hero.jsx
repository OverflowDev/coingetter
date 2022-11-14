import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'


import CoinContext from '../context/CoinContext'

function Hero() {

    // const [global, setGlobal] = useState(null)
    const {global, loading} = useContext(CoinContext)


    var numeral = require('numeral');

    if(!global) return null

  return (
    <div className='flex flex-col flex-wrap justify-center md:p-12 p-8'>
        <div className='mx-auto md:max-w-3xl'>
            <div className='text-center'>
                <h1 className='font-semibold leading-snug md:text-6xl text-4xl whitespace-pre-wrap'>
                    Live Cryptocurrency <span className='text-green'>Prices</span> and <span className='text-green'>Market Cap</span> 
                </h1>
            </div>
        </div>
        {loading 
            ? 
            <div className='mx-auto md:w-full md:max-w-2xl mt-2'>
                <p className=' h-4 w-full rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</p>
                <p className=' h-4 w-72 mx-auto rounded animate-pulse dark:bg-gray-500 bg-dark mt-2'>{''}</p>
            </div>
            :
            <div className='mx-auto md:max-w-2xl mt-2'>
                <p className=' text-2xl text-center font-light dark:text-gray-300'>
                    The market cap of all cryptocurrencies is at <span className='uppercase'>{numeral(global?.data?.total_market_cap.usd).format('$0.0a')}</span>, <span>{global?.data?.market_cap_change_percentage_24h_usd < 0 ? (<i className='text-red-500 not-italic'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-down-outline"></ion-icon></i>) : (<i className='dark:text-lime-500 text-deepGreen not-italic'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-up-outline"></ion-icon> </i>) }</span> in the last 24 hours.<Link to='/' className='underline'>Read More</Link>
                </p>
            </div>
        }
        {/* {global.data.market_cap_change_percentage_24h_usd < 0 ? (<p className='dark:text-red-500 text-red-500'>{global.data.market_cap_change_percentage_24h_usd.toFixed(2)}%</p>) : (<p className='dark:text-red-500 text-red-500'>{global.data.market_cap_change_percentage_24h_usd.toFixed(2)}%</p>)} */}
    </div>
  )
}

export default Hero