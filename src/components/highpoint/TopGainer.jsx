import Chartup from '../../assets/svg/chartup.svg'
import Chartdown from '../../assets/svg/chartdown.svg'

function TopGainer() {
  return (
    <div>
        <div className='flex items-center justify-between p-4'>
            <div>
                <button className='py-2 px-3 bg-teal-200 hover:bg-opacity-80'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartup} alt="up" className='' />
                        <h1 className='font-semibold text-teal-800 tracking-wider'>Top Gainer</h1>
                    </div>
                </button>
                <button className='py-2 px-3'>
                    <div className='flex items-center space-x-2'>
                        <img src={Chartdown} alt="down" className='' />
                        <h1 className='font-semibold text-white hover:text-gray-300 tracking-wider'>Top Loser</h1>
                    </div>
                </button>
            </div>

            <div>
                <button className='py-2 px-3'>
                    <h1 className='font-semibold text-green hover:text-teal-200 tracking-wider'>View All</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopGainer