import { useContext, useState } from 'react'
import CoinContext from '../../context/CoinContext'
import { Link } from 'react-router-dom'

import Chartup from '../../assets/svg/chartup.svg'
// import Chartdown from '../../assets/svg/chartdown.svg'
// import Ticker from '../../assets/svg/ticker.svg'
// import AGreen from '../../assets/svg/arrowgreen.svg'

function TopGainer() {

    const [exchange, setExchange] = useState([

        {
            "id": "binance",
            "name": "Binance",
            "year_established": 2017,
            "url": "https://www.binance.com/",
            "image": "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
        },
        {
            "id": "gdax",
            "name": "Coinbase Exchange",
            "year_established": 2012,
            "url": "https://www.coinbase.com",
            "image": "https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875",
        },
        {
            "id": "kraken",
            "name": "Kraken",
            "year_established": 2011,
            "url": "https://r.kraken.com/c/2223866/687155/10583",
            "image": "https://assets.coingecko.com/markets/images/29/small/kraken.jpg?1584251255",
        },
    ])

    const {exchanges, loading} = useContext(CoinContext)

    // const exchange = exchanges.slice(0,3)

    // if(!exchange) return null

  return (
    <div className='p-4'>
        <div className='flex items-center justify-between'>
            <div>
                <button className='py-2 px-2'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartup} alt="up" className='' />
                        <h1 className='font-semibold dark:text-white text-gray-900 tracking-wider'>Top Exchanges</h1>
                    </div>
                </button>
                {/* <button className='py-2 md:ml-6 ml-3'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartdown} alt="down" className='' />
                        <h1 className='font-semibold text-white dark:hover:text-gray-300 tracking-wider'>Top Loser</h1>
                    </div>
                </button> */}
            </div>

            <div>
                <button className='py-2 px-3'>
                    <h1 className='font-semibold dark:text-green dark:hover:text-teal-200 tracking-wider'>View All</h1>
                </button>
            </div>
        </div>

            {/* exchanges coins  */}

            {loading ? 
                <div>
                    {
                        exchange.map((ex, i) => {
                            return (
                                <div key={i} className='flex-col mt-3 space-y-4'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center py-2 px-3 space-x-4 text-white'>
                                            <div className='md:h-4 md:w-4 h-4 w-4  rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                            <div className='md:h-8 md:w-8 h-8 w-8 rounded-full animate-pulse dark:bg-gray-500 bg-dark'></div>
                                            <div className='md:h-4 md:w-48  h-4 w-32 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                        </div>
                                        <div className='flex py-2 px-3 space-x-4 text-white'>
                                            <div className='md:h-4 md:w-24 h-4 w-16 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                        </div>
                                    </div>
                            </div>
                            )
                        })
                    }
                </div>
                :
                <div className='md:p-0 p-2'>
                    {
                        exchange.map((ex, i) => {
                            return (
                                <div key={i} className='flex-col items-center mt-3 space-y-4'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center py-2 px-3 space-x-4 dark:text-white'>
                                            <h1>{i + 1}.</h1>
                                            <img src={ex?.image} alt="ticker" className='w-8 h-8 rounded-full' />
                                            <a href={ex?.url} target="_blank" className='tracking-wider font-semibold hover:text-green' rel='noreferrer'>{ex?.name}</a>
                                        </div>
                                        <div className='flex py-2 px-3 space-x-4 dark:text-white text-dark'>
                                            <h1 className='tracking-wider font-semibold'>{ex?.year_established}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
    </div>
  )
}

export default TopGainer