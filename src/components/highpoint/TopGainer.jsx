import Chartup from '../../assets/svg/chartup.svg'
import Chartdown from '../../assets/svg/chartdown.svg'
import Ticker from '../../assets/svg/ticker.svg'
import AGreen from '../../assets/svg/arrowgreen.svg'

function TopGainer() {
  return (
    <div className='p-4'>
        <div className='flex items-center justify-between'>
            <div>
                <button className='py-2 px-2 bg-teal-200 hover:bg-opacity-80'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartup} alt="up" className='' />
                        <h1 className='font-semibold text-teal-800 tracking-wider'>Top Gainer</h1>
                    </div>
                </button>
                <button className='py-2 ml-6'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartdown} alt="down" className='' />
                        <h1 className='font-semibold text-white dark:hover:text-gray-300 tracking-wider'>Top Loser</h1>
                    </div>
                </button>
            </div>

            <div>
                <button className='py-2 px-3'>
                    <h1 className='font-semibold text-green hover:text-teal-200 tracking-wider'>View All</h1>
                </button>
            </div>
        </div>

        {/* Trending coins  */}
        <div className='flex-col mt-6 space-y-4'>
            <div className='flex items-center justify-between text-white'>
                <div className='flex py-2 px-3 space-x-4 '>
                    <h1>1.</h1>
                    <img src={Ticker} alt="ticker" />
                    <h1 className='tracking-wider font-semibold'>BNB</h1>
                </div>
                <div className='flex py-2 px-3 space-x-4 '>
                    <h1 className='tracking-wider font-semibold'>$200.25</h1>
                </div>
                <div className='flex space-x-1 py-2 px-3'>
                    <img src={AGreen} alt="arrow" />
                    <h1 className='tracking-wider font-semibold text-lightGreen'>72%</h1>
                </div>
            </div>
            <div className='flex items-center justify-between text-white'>
                <div className='flex py-2 px-3 space-x-4'>
                    <h1>2.</h1>
                    <img src={Ticker} alt="ticker" />
                    <h1 className='tracking-wider font-semibold'>BNB</h1>
                </div>
                <div className='flex py-2 px-3 space-x-4 '>
                    <h1 className='tracking-wider font-semibold'>$200.25</h1>
                </div>
                <div className='flex space-x-1 py-2 px-3'>
                    <img src={AGreen} alt="arrow" />
                    <h1 className='tracking-wider font-semibold text-lightGreen'>72%</h1>
                </div>
            </div>
            <div className='flex items-center justify-between text-white'>
                <div className='flex py-2 px-3 space-x-4'>
                    <h1>3.</h1>
                    <img src={Ticker} alt="ticker" />
                    <h1 className='tracking-wider font-semibold'>BNB</h1>
                </div>
                <div className='flex py-2 px-3 space-x-4'>
                    <h1 className='tracking-wider font-semibold'>$200.25</h1>
                </div>
                <div className='flex space-x-1 py-2 px-3'>
                    <img src={AGreen} alt="arrow" />
                    <h1 className='tracking-wider font-semibold text-lightGreen'>72%</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopGainer