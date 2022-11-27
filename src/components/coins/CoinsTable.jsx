import { useContext, useState } from 'react'
import CoinContext from '../../context/CoinContext'

import { Link } from 'react-router-dom'

import Pagination from './Pagination'
import Spinner from '../../layouts/Spinner'

function CoinsTable() {

    const {coins, loading} = useContext(CoinContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [coinsPerPage, setCoinsPerPage] = useState(15)

    const lastCoinIndex = currentPage * coinsPerPage
    const firstCoinIndex = lastCoinIndex - coinsPerPage

    const currentCoins = coins.slice(firstCoinIndex, lastCoinIndex)

    if(coins) {
        return ( 
            <div>
                <div className='overflow-x-auto'>
                    <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-x-auto'>
                            <table className="table-fixed border-separate border-spacing-y-3 min-w-full whitespace-nowrap ">
                                <thead className='h-12 dark:bg-tableDark dark:bg-opacity-50 bg-tableDark bg-opacity-10 dark:text-white shadow-inner'>
                                    {loading ? 
                                        <tr className='animate pulse'>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'></th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Coins</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Price</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>24h (%)</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Price(24h) <i className='text-red-500'><ion-icon name="caret-down-outline"></ion-icon></i></th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Price(24h) <i className='text-green'><ion-icon name="caret-up-outline"></ion-icon></i></th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Ath</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Market Cap</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Market Cap (24h %)</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'></th>
                                        </tr>
                                        : 
                                        <tr>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'></th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Coins</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Price</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>24h (%)</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Price(24h) <i className='text-red-500'><ion-icon name="caret-down-outline"></ion-icon></i></th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Price(24h) <i className='text-green'><ion-icon name="caret-up-outline"></ion-icon></i></th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Ath</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Market Cap</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'>Market Cap (24h %)</th>
                                            <th scope="col" className='text-sm font-semibold tracking-wider uppercase'></th>
                                        </tr>
                                    }
                                </thead>
                                {/* Table body  */}
                                {loading ? 
                                    <tbody>
                                        {
                                            currentCoins.map((coin, i) => {
                                                return (
                                                    <tr key={i} className='dark:bg-summary bg-tableDark dark:bg-opacity-10 bg-opacity-20  h-16'>
                                                        <td className=' px-6 py-4 whitespace-nowrap '>
                                                            <div className='flex items-center ml-2 space-x-1'>
                                                                <div className='h-6 w-8 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                            </div>
                                                        </td>
                                                        <td className=' px-6 py-4 whitespace-nowrap'>
                                                            <div className='flex items-center space-x-3'>
                                                                <div className='h-12 w-12 rounded-full animate-pulse dark:bg-gray-500 bg-dark flex items-center justify-center'></div>
                                                                <div className='flex-col'>
                                                                    <div className='h-4 w-12 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                                    <div className='h-4 w-24 rounded animate-pulse dark:bg-gray-500 bg-dark mt-2'></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className=' px-6 py-2  '>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className=' px-6 py-2'>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className=' px-6 py-2'>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className=' px-6 py-2'>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className=' px-6 py-2'>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className=' px-6 py-2'>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className=' px-6 py-2'>
                                                            <div className='px-6 py-2 rounded animate-pulse dark:bg-gray-500 bg-dark'></div>
                                                        </td>
                                                        <td className='text-center px-6 py-4'>
                                                            <button className='animate-pulse dark:bg-gray-600 bg-gray-400 h-8 w-8 rounded-full'>
                                                                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    :
                                    <tbody className=''>
                                        {
                                            currentCoins.map((coin, i) => {
                                                return (
                                                    <tr key={i} className='dark:bg-summary bg-tableDark dark:bg-opacity-10 bg-opacity-10 shadow-inner h-16'>
                                                        <td className='dark:text-white text-sm font-light px-6 py-4 whitespace-nowrap '>
                                                            <div className='flex items-center ml-2 space-x-1'>
                                                                <ion-icon name="star-outline"></ion-icon>
                                                                <h1 className='text-md font-semibold'>{coin.market_cap_rank}</h1>
                                                            </div>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <div className='flex items-center space-x-3'>
                                                                <div className='md:h-12 md:w-12 h-8 w-8 rounded-full bg-transparent border dark:border-gray-500 border-gray-800 flex items-center justify-center'>
                                                                    <img src={coin.image} alt="bitcoin" className='md:h-8 md:w-8 h-6 w-6' />
                                                                </div>
                                                                <div className='flex-col dark:text-gray-400 text-gray-800'>
                                                                    <h1 className='uppercase font-semibold md:text-md text-sm'>{coin.symbol}</h1>
                                                                    <h1 className=' tracking-wide font-light md:text-md text-sm'>{coin.name}</h1>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <h1 className='text-center'>{coin.current_price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h1>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <h1 className='text-center '>
                                                                {
                                                                    coin.price_change_percentage_24h < 0 ? (
                                                                        <i className='dark:text-red-500 text-red-600 not-italic'>{coin.price_change_percentage_24h.toFixed(2)}%</i>
                                                                        ) : (
                                                                        <i className='text-lightGreen not-italic'>{coin.price_change_percentage_24h.toFixed(2)}%</i>
                                                                    )
                                                                }
                                                            </h1>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <h1 className='text-center dark:text-red-500 text-red-600'>${coin.low_24h.toLocaleString()}</h1>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <h1 className='text-center dark:text-lightGreen text-green'>${coin.high_24h.toLocaleString()}</h1>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <h1 className='text-center'>${coin.ath.toLocaleString()}</h1>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <h1 className='text-center'>${coin.market_cap.toLocaleString()}</h1>
                                                        </td>
                                                        <td className=' text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            {/* <img src={Up} alt="Up" className='mx-auto' /> */}
                                                            <h1 className='text-center '>
                                                                {
                                                                    coin.market_cap_change_percentage_24h < 0 ? (
                                                                        <i className='dark:text-red-500 text-red-600 not-italic'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</i>
                                                                        ) : (
                                                                        <i className='dark:text-lightGreen text-green not-italic'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</i>
                                                                    )
                                                                }
                                                            </h1>
                                                        </td>
                                                        <td className='text-center text-sm font-light px-6 py-4 whitespace-nowrap'>
                                                            <Link to={`/coin/${coin.id}`}>
                                                                <button className='dark:bg-gray-600 bg-gray-400 h-8 w-8 rounded-full'>
                                                                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                                </button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                }
                            </table>
                        </div>
                    </div>
                </div>

                {/* Pagination  */}
                <div className='static'>
                    <Pagination 
                        totalCoins={coins.length} 
                        coinsPerPage={coinsPerPage} 
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        loading={loading}
                        lastCoinIndex={lastCoinIndex}
                    />
                </div>

            </div>
        )
    } else {
        return <Spinner />
    }
    
}

export default CoinsTable