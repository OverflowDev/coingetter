import { useContext } from 'react'
import CoinContext from '../../context/CoinContext'

import Chartup from '../../assets/svg/chartup.svg'
// import Chartdown from '../../assets/svg/chartdown.svg'
// import Ticker from '../../assets/svg/ticker.svg'
// import AGreen from '../../assets/svg/arrowgreen.svg'

function TopGainer() {

    const {exchanges, loading} = useContext(CoinContext)

  return (
    <div className='p-4'>
        <div className='flex items-center justify-between'>
            <div>
                <button className='py-2 px-2'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartup} alt="up" className='' />
                        <h1 className='font-semibold dark:text-white text-teal-800 tracking-wider'>Top Exchanges</h1>
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
                    <h1 className='font-semibold text-green hover:text-teal-200 tracking-wider'>View All</h1>
                </button>
            </div>
        </div>

            {/* exchanges coins  */}

            {loading ? 
                <div>
                    {
                        exchanges?.slice(0,3).map((trend, i) => {
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
                <div>
                    {
                        exchanges?.slice(0,3).map((exchange, i) => {
                            return (
                                <div key={i} className='flex-col items-center mt-3 space-y-4'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center py-2 px-3 space-x-4 text-white'>
                                            <h1>{i + 1}.</h1>
                                            <img src={exchange?.image} alt="ticker" className='w-8 h-8 rounded-full' />
                                            <h1 className='tracking-wider font-semibold'>{exchange?.name}</h1>
                                        </div>
                                        <div className='flex py-2 px-3 space-x-4 text-white'>
                                            <h1 className='tracking-wider font-semibold'>{exchange?.year_established}</h1>
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