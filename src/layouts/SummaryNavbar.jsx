import { useContext } from 'react'

import CoinContext from '../context/CoinContext'

function SummaryNavbar() {

    const {global, loading} = useContext(CoinContext)

    if (!global) return null

  return (
    <div className='overflow-hidden dark:bg-summary bg-dark dark:bg-opacity-10 bg-opacity-10 py-3 md:px-14 px-4 flex items-center justify-between shadow-inner'>
        {/* Small screen */}
        {loading 
            ? 
            <div className="lg:hidden relative flex overflow-hidden md:space-x-6 space-x-5 md:px-56 px-3">
                <div className="animate-marquee whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className='flex items-center space-x-2'>
                            <h1>Cryptos:</h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>Exchanges:  </h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>Market Cap:  </h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>24h Vol:  </h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='col-span-2 flex items-center space-x-2'>
                            <h1>Dominance:  </h1>
                            <div className='h-4 w-36 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className='flex items-center space-x-2'>
                            <h1>Cryptos:</h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>Exchanges:  </h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>Market Cap:  </h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <h1>24h Vol:  </h1>
                            <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                        </div>
                        <div className='col-span-2 flex items-center space-x-2'>
                            <h1>Dominance:  </h1>
                            <div className='h-4 w-36 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                        </div>
                    </div>
                </div>
            </div>
            
            :
            <div className="lg:hidden relative flex overflow-hidden md:space-x-6 space-x-5 md:px-56 px-3">
                <div className="animate-marquee whitespace-nowrap">
                    <div className="flex gap-3">
                        <div className='flex space-x-2'>
                            <h1>Cryptos:</h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.active_cryptocurrencies}</h2>
                        </div>
                        <div className='flex space-x-2'>
                            <h1>Exchanges:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.markets}</h2>
                        </div>
                        <div className='flex space-x-2'>
                            <h1>Market Cap:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.total_market_cap.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                            {global?.data?.market_cap_change_percentage_24h_usd < 0 ? (
                                <h2 className='dark:text-red-500 text-red-500 font-medium flex items-center'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-down-outline"></ion-icon> </h2>
                                ) : (
                                    <h2 className='dark:text-lime-500 text-deepGreen font-semibold flex items-center'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-up-outline"></ion-icon> </h2>
                                )
                            }
                        </div>
                        <div className='flex space-x-2'>
                            <h1>24h Vol:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.total_volume.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                        </div>
                        <div className='col-span-2 flex space-x-2'>
                            <h1>Dominance:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-medium'>
                                BTC <span>{global?.data?.market_cap_percentage.btc.toFixed(2)}%</span>
                            </h2>
                            <h2 className='dark:text-green text-deepGreen font-medium'>
                                ETH <span>{global?.data?.market_cap_percentage.eth.toFixed(2)}%</span>
                            </h2>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>
                                Gas: <span>100 GWEI</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                    <div className="flex gap-3">
                        <div className='flex space-x-2'>
                            <h1>Cryptos:</h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.active_cryptocurrencies}</h2>
                        </div>
                        <div className='flex space-x-2'>
                            <h1>Exchanges:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.markets}</h2>
                        </div>
                        <div className='flex space-x-2'>
                            <h1>Market Cap:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.total_market_cap.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                            {global?.data?.market_cap_change_percentage_24h_usd < 0 ? (
                                <h2 className='dark:text-red-500 text-red-500 font-medium flex items-center'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-down-outline"></ion-icon> </h2>
                                ) : (
                                    <h2 className='dark:text-lime-500 text-deepGreen font-semibold flex items-center'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-up-outline"></ion-icon> </h2>
                                )
                            }
                        </div>
                        <div className='flex space-x-2'>
                            <h1>24h Vol:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.total_volume.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                        </div>
                        <div className='col-span-2 flex space-x-2'>
                            <h1>Dominance:  </h1>
                            <h2 className='dark:text-green text-deepGreen font-medium'>
                                BTC <span>{global?.data?.market_cap_percentage.btc.toFixed(2)}%</span>
                            </h2>
                            <h2 className='dark:text-green text-deepGreen font-medium'>
                                ETH <span>{global?.data?.market_cap_percentage.eth.toFixed(2)}%</span>
                            </h2>
                            <h2 className='dark:text-green text-deepGreen font-semibold'>
                                Gas: <span>100 GWEI</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        }

        {/* Medium screen */}
        {loading 
            ? 
            <div className='hidden lg:flex items-center xl:space-x-3 lg:space-x-3'>
                <div className='flex items-center space-x-2'>
                    <h1>Cryptos:</h1>
                    <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                </div>
                <div className='flex items-center space-x-2'>
                    <h1>Exchanges:  </h1>
                    <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                </div>
                <div className='flex items-center space-x-2'>
                    <h1>Market Cap:  </h1>
                    <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                </div>
                <div className='flex items-center space-x-2'>
                    <h1>24h Vol:  </h1>
                    <h2 className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark'>{''}</h2>
                </div>
                <div className='col-span-2 flex items-center space-x-2'>
                    <h1>Dominance:  </h1>
                    <div className='h-4 w-36 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                </div>
            </div>
            :
            <div className='hidden lg:flex lg:space-x-3 '>
                <div className='flex space-x-2'>
                    <h1>Cryptos:</h1>
                    <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.active_cryptocurrencies }</h2>
                </div>
                <div className='flex space-x-2'>
                    <h1>Exchanges:  </h1>
                    <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.markets}</h2>
                </div>
                <div className='flex space-x-2'>
                    <h1>Market Cap:  </h1>
                    <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.total_market_cap.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                    {global?.data?.market_cap_change_percentage_24h_usd < 0 ? (
                        <h2 className='dark:text-red-500 text-red-500 font-medium flex items-center'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-up-outline"></ion-icon> </h2>
                        ) : (
                            <h2 className='dark:text-lime-500 text-deepGreen font-semibold flex items-center'>{global?.data?.market_cap_change_percentage_24h_usd.toFixed(2)}% <ion-icon name="caret-up-outline"></ion-icon> </h2>
                        )
                    }
                </div>
                <div className='flex space-x-2'>
                    <h1>24h Vol:  </h1>
                    <h2 className='dark:text-green text-deepGreen font-semibold'>{global?.data?.total_volume.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                </div>
                <div className='col-span-2 flex space-x-2'>
                    <h1>Dominance:  </h1>
                    <h2 className='dark:text-green text-deepGreen font-medium'>
                        BTC <span>{global?.data?.market_cap_percentage.btc.toFixed(2)}%</span>
                    </h2>
                    <h2 className='dark:text-green text-deepGreen font-medium'>
                        ETH <span>{global?.data?.market_cap_percentage.eth.toFixed(2)}%</span>
                    </h2>
                    <h2 className='dark:text-green text-deepGreen font-semibold'>
                        Gas: <span>100 GWEI</span>
                    </h2>
                </div>
            </div>
        }
        
        {/* Login and SignUp  */}
        <div className='lg:flex gap-2 hidden'>
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