import Porfolio from '../../assets/svg/portfolio.svg'
import Watchlist from '../../assets/svg/watchlist.svg'

function Categories() {
  return (
    <div className='flex flex-wrap items-center justify-between py-2'>
        <div className='flex dark:text-gray-300 text-black md:mb-0 mb-6'>
            <div className='md:flex md:space-x-8 space-x-6'>
                <button className='text-green text-lg hover:text-teal-300 underline underline-offset-[15px] font-semibold'>
                    Cryptocurrencies
                </button>
                <button className='text-lg hover:text-teal-300'>
                    Categories
                </button>
            </div>
            <div className='md:flex md:space-x-8 hidden'>
                <button className='text-lg hover:text-teal-300'>
                    Defi
                </button>
                <button className='text-lg hover:text-teal-300'>
                    NFT
                </button>
                <button className='text-lg hover:text-teal-300'>
                    Metaverse
                </button>
                <button className='text-lg hover:text-teal-300'>
                    Polkadot
                </button>
                <button className='text-lg hover:text-teal-300'>
                    Binance Smart Chain
                </button>
                <button className='text-lg hover:text-teal-300'>
                    Solana
                </button>
                <button className='text-lg hover:text-teal-300'>
                    Avalanche
                </button>
            </div>
        </div>
        <div className='hidden md:flex space-x-5 '>
            <button className='border-2 flex space-x-2 py-1 px-4'>
                <img src={Porfolio} alt="Porfolio" className='h-6 w-6' />
                <h1>Portfolio</h1>
            </button>
            <button className='border-2 flex space-x-2 py-1 px-4'>
                <img src={Watchlist} alt="Watchlist" className='h-6 w-6' />
                <h1>Watchlist</h1>
            </button>
        </div>
    </div>
  )
}

export default Categories