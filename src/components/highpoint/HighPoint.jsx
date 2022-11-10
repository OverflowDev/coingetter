import {useState} from 'react'

// import Ads from './Ads'
import TopGainer from './TopGainer'
import Trending from './Trending'

// import ads from '../../assets/svg/ads.svg'
import ads from '../../assets/png/b9013f82a6e34612924105529705d9df.jpeg'

function HighPoint() {

    const [isActive, setIsActive] = useState(false)

    const toggleClass = ' transform translate-x-5';

  return (
    <div className='mt-2 p-12 md:px-14 px-4'>
        {/* <div className='mb-4'> */}
        <div className="flex items-center mb-4">
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
        <div className={` ${isActive ? 'hidden' : 'flex justify-center'}`}>
            <div className='md:flex grid grid-cols-1 md:space-y-0 space-y-3 md:space-x-5 w-full'>
                <div className=' rounded shadow-inner
                    dark:bg-gradient-to-br dark:from-red-500 dark:via-gray-800 
                    bg-gradient-to-br from-red-500 via-gray-800 
                    md:p-[0.8px]
                    md:h-64 md:w-11/12'
                >
                    <div className='h-full w-full dark:bg-gray-800 bg-gray-600 rounded shadow-inner'>
                        <Trending />
                    </div>
                </div>
                <div className='rounded shadow-inner
                    dark:bg-gradient-to-br dark:from-green dark:via-transparent dark:to-transparent 
                    bg-gradient-to-br from-green via-transparent to-transparent 
                    p-[0.8px]
                    md:h-64 md:w-11/12'
                >
                    <div className='rounded h-full w-full dark:bg-gray-800 bg-gray-600 shadow-inner'>
                        <TopGainer />
                    </div>
                </div>
                {/* <div className='rounded
                    bg-gradient-to-r from-green via-transparent to-transparent p-[1px]
                    h-64 w-11/12'
                > */}
                    <div className='rounded md:h-64 md:w-11/12 dark:bg-gray-800 bg-gray-200 shadow-inner'>
                        {/* <Ads /> */}
                        <img src={ads} alt="" className='md:object-cover md:h-64 md:w-full rounded' />
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default HighPoint