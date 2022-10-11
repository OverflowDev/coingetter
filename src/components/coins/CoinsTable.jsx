import Up from '../../assets/svg/up.svg'
import Down from '../../assets/svg/down.svg'
import Bitcoin from '../../assets/svg/bitcoin.svg'
import Ticker from '../../assets/svg/ticker.svg'

function CoinsTable() {
  return (
    <div>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4'>
            <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='overflow-x-auto'>
                    <table className="table-auto border-separate border-spacing-y-3 min-w-full">
                        <thead className='h-12 dark:bg-tableDark bg-tableDark bg-opacity-30'>
                            <tr>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'></th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Coins</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Price</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>1h</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>4h</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>24h</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Last 7D</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>24h Volume</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>Market Cap</th>
                                <th scope="col" className='text-sm font-medium text-gray-900 px-6 py-4 text-left'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='dark:bg-summary bg-tableDark dark:bg-opacity-10 bg-opacity-20 h-16'>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center ml-2 space-x-1'>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <h1 className='text-md font-semibold'>1</h1>
                                    </div>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='h-12 w-12 rounded-full bg-transparent border border-gray-500 flex items-center justify-center'>
                                            <img src={Bitcoin} alt="bitcoin" className='h-8 w-8' />
                                        </div>
                                        <div className='flex-col'>
                                            <h1 className='uppercase'>Btc</h1>
                                            <h1 className='text-gray-400 tracking-wide font-light'>Bitcoin</h1>
                                        </div>
                                    </div>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center'>$19,876</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center text-red-800'>-0.14%</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center text-lightGreen'>1.4%</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center text-lightGreen'>12.4%</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <img src={Up} alt="Up" />
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center'>24,549.71M</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center'>$24,549,956.71M</h1>
                                </td>
                                <td className='text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <button className='dark:bg-gray-600 bg-gray-400 h-8 w-8 rounded-full'>
                                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                    </button>
                                </td>
                            </tr>
                            <tr className='dark:bg-summary bg-tableDark dark:bg-opacity-10 bg-opacity-20 h-16'>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center ml-2 space-x-1'>
                                        <ion-icon name="star-outline"></ion-icon>
                                        <h1 className='text-md font-semibold'>1</h1>
                                    </div>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='h-12 w-12 rounded-full bg-transparent border border-gray-500 flex items-center justify-center'>
                                            <img src={Bitcoin} alt="bitcoin" className='h-8 w-8' />
                                        </div>
                                        <div className='flex-col'>
                                            <h1 className='uppercase'>Btc</h1>
                                            <h1 className='text-gray-400 tracking-wide font-light'>Bitcoin</h1>
                                        </div>
                                    </div>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center'>$19,876</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center text-red-800'>-0.14%</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center text-lightGreen'>1.4%</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center text-lightGreen'>12.4%</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <img src={Down} alt="Up" />
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center'>24,549.71M</h1>
                                </td>
                                <td className=' text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <h1 className='text-center'>$24,549,956.71M</h1>
                                </td>
                                <td className='text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                    <button className='dark:bg-gray-600 bg-gray-400 h-8 w-8 rounded-full'>
                                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* Pagination  */}
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
            <div className="lg:w-3/5 w-full  flex items-center justify-between border-t dark:border-gray-200 border-gray-900">
                <div className="flex items-center pt-3 dark:text-gray-200 text-gray-900 hover:text-green cursor-pointer">
                    <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                </div>
                <div className="sm:flex hidden">
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">1</p>
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">2</p>
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">3</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-green border-t border-lightGreen pt-3 mr-4 px-2">4</p>
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">5</p>
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">6</p>
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">7</p>
                    <p className="text-sm font-medium leading-none cursor-pointer dark:text-gray-200 hover:text-green border-t border-transparent hover:border-lightGreen pt-3 mr-4 px-2">8</p>
                </div>
                <div className="flex items-center pt-3 dark:text-gray-200 text-gray-900 hover:text-green cursor-pointer">
                    <p className="text-sm font-medium leading-none mr-3">Next</p>
                    <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoinsTable