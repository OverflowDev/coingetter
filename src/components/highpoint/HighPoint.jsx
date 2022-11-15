import {useState, useContext} from 'react'

import CoinContext from '../../context/CoinContext'

// import Ads from './Ads'
import TopGainer from './TopGainer'
import Trending from './Trending'

import ads from '../../assets/svg/ads.svg'
// import ads from '../../assets/png/b9013f82a6e34612924105529705d9df.jpeg'

function HighPoint() {

    const [isActive, setIsActive] = useState(false)

    const {loading} = useContext(CoinContext)

    const toggleClass = ' transform translate-x-5';

  return (
    <div className='lg:p-10 p-12 md:px-14 px-4'>
        {/* <div className='mb-4'> */}
        <div className="flex items-center justify-end lg:justify-start mb-4">
            <h1 className='text-lg font-bold mr-2'>HighLight</h1>
            <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                {/* Switch */}
                <div
                    className =  {`bg-white md:w-7 md:h-7 h-5 w-5 rounded-full shadow-md transform ${isActive ? toggleClass : null }` }
                >
                </div>
            </div>
        </div>
        <div className={` ${isActive ? 'hidden transition ease-out duration-500 delay-300' : 'flex justify-center transition ease-in duration-500 delay-300'}`}>
            <div className='lg:flex grid grid-cols-1 lg:space-y-0 space-y-3 lg:space-x-5 w-full'>
                {/* Trending  */}
                {loading ?
                    <div className='rounded shadow-inner lg:p-[0.8px] lg:h-64 lg:w-11/12'>
                        <div className='animate-pulse h-full w-full dark:bg-gray-700 bg-gray-700 rounded shadow-inner'></div>
                    </div>
                    :
                    <div className=' rounded shadow-inner
                        dark:bg-gradient-to-br dark:from-red-500 dark:via-gray-800 
                        bg-gradient-to-br from-red-500 via-gray-800 
                        dark:p-[0.8px]
                        lg:h-64 lg:w-11/12'
                    >
                        <div className='h-full w-full dark:bg-gray-800 bg-gray-50 rounded shadow-inner'>
                            <Trending />
                        </div>
                    </div>
                }
                {/* Exchanges  */}
                {loading ?
                    <div className='rounded shadow-inner lg:p-[0.8px] lg:h-64 lg:w-11/12'>
                        <div className='animate-pulse h-full w-full dark:bg-gray-700 bg-gray-700 rounded shadow-inner'></div>
                    </div>
                    :
                    <div className='rounded shadow-inner
                        dark:bg-gradient-to-br dark:from-green dark:via-transparent dark:to-transparent 
                        bg-gradient-to-br from-green via-transparent to-transparent 
                        dark:p-[0.8px]
                        lg:h-64 lg:w-11/12'
                    >
                        <div className='rounded h-full w-full dark:bg-gray-800 bg-gray-50 shadow-inner'>
                            <TopGainer />
                        </div>
                    </div>
                }
                {/* Ads  */}
                <div className='lg:flex md:hidden rounded lg:h-64 lg:w-full dark:bg-gray-800 bg-gray-200 shadow-inner'>
                    {/* <Ads /> */}
                    <img src={ads} alt="ads" className='object-cover lg:h-64 lg:w-full rounded' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HighPoint