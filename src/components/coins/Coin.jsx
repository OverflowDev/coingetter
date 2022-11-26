import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Moment from 'moment'

import CoinContext from '../../context/CoinContext'

import gif from '../../assets/png/spinner.gif'
import ShareModal from '../../layouts/ShareModal'
import CoinDescription from './CoinDescription'
import Breadcrumbs from '../../layouts/Breadcrumbs'

function Coin() {

    const {fetchCoin, coin, loading} = useContext(CoinContext)

    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)

    const [activeNoti, setActiveNoti] = useState(false)
    const handleActiveNoti = () => setActiveNoti(!activeNoti)

    const [activeStar, setActiveStar] = useState(false)
    const handleActiveStar = () => setActiveStar(!activeStar)
    

    const params = useParams()

    // Date 
    Moment.locale('en');
    
    useEffect(() => {
        fetchCoin(params.id)
        window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const homepages = coin?.links?.homepage
    const homepagesResults = homepages?.filter(element => {
        if (Object.keys(element).length !== 0) {
          return true;
        }
        return false;
    });
    
    const explorers = coin?.links?.blockchain_site
    const explorersResults = explorers?.filter(element => {
        if (Object.keys(element).length !== 0) {
          return true;
        }
        return false;
    });
    
    const sourceCode = coin?.links?.repos_url?.github

    const Categories = coin?.categories


    if(!coin) return null

    return (
    <div className='overflow-hidden h-full '>
        <Breadcrumbs coin={coin} />
        {loading ? 
            <div className='flex items-center justify-center h-screen'>
                <img src={gif} alt="gif" className='h-12 w-12' />
            </div>
            :
            <div className='md:px-12 px-4 mt-8'>
                <div className='grid md:grid-cols-3'>
                    {/* Col 1  */}
                    <div className="col-span-2 ">
                        <div className="flex-col">
                            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-semibold dark:bg-summary dark:bg-opacity-25 bg-dark text-white rounded">Rank #{coin.market_cap_rank}</span>
                            <div className='mt-4 flex items-center space-x-2 '>
                                <div className='md:h-12 md:w-12 h-8 w-8 rounded-full bg-transparent border dark:border-gray-500 border-gray-800 flex items-center justify-center'>
                                    <img src={coin?.image?.thumb} alt="bitcoin" className='md:h-8 md:w-8 h-6 w-6' />
                                </div>
                                <h2 className='text-lg font-bold '>{coin.name}</h2>
                                <span className="text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-dark rounded uppercase">{coin.symbol} </span>
                            </div>
                            <div className='mt-4 flex items-center space-x-2 '>
                                <h2 className='text-4xl font-bold '>${coin?.market_data?.current_price?.usd.toLocaleString()}</h2>
                                <p>
                                <span>
                                    {coin?.market_data?.price_change_percentage_24h < 0 ? 
                                    (<i className='text-red-500 not-italic'>{coin?.market_data?.price_change_percentage_24h.toFixed(2)}% <ion-icon name="caret-down-outline"></ion-icon></i>) 
                                    : 
                                    (<i className='dark:text-lime-500 text-deepGreen not-italic'>{coin?.market_data?.price_change_percentage_24h.toFixed(2)}% <ion-icon name="caret-up-outline"></ion-icon> </i>) }
                                </span>
                                </p>
                            </div>
                            {/* Buttons  */}
                            <div className='mt-4 flex items-center space-x-3 '>
                                <button 
                                    className='px-4 py-1 outline outline-2 rounded dark:hover:bg-gray-700 hover:bg-gray-300'
                                    onClick={() => setShowModal(true)}
                                >
                                    <ion-icon name="arrow-redo-outline"></ion-icon>
                                </button>
                                <button 
                                    className='px-4 py-1 outline outline-2 rounded dark:hover:bg-gray-700 hover:bg-gray-300'
                                    onClick={handleActiveNoti}
                                >
                                    {activeNoti ? 
                                        <h2 className='text-red-800'>
                                            <ion-icon name="notifications"></ion-icon>
                                        </h2>
                                        :
                                        <h2 className=''>
                                            <ion-icon name="notifications-outline"></ion-icon>
                                        </h2>
                                    }
                                </button>
                                <button 
                                    className='px-4 py-1 outline outline-2 rounded dark:hover:bg-gray-700 hover:bg-gray-300'
                                    onClick={handleActiveStar}
                                >
                                    {activeStar ? 
                                        <h2 className='text-yellow-500'>
                                            <ion-icon name="star"></ion-icon>
                                        </h2>
                                        :
                                        <h2 className=''>
                                            <ion-icon name="star-outline"></ion-icon>
                                        </h2>
                                    }
                                </button>
                            </div>
                            {/* Buttons ends  */}
                            {/* Info  */}
                            <div className='mt-8 grid md:grid-cols-2 gap-6'>
                                <div className='flex items-center space-x-6'>
                                    <h2 className='text-sm'>Total Supply</h2>
                                    <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-20 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">{coin?.market_data?.total_supply.toLocaleString()}</span>
                                </div>
                                <div className='flex items-center space-x-6'>
                                    <h2 className='text-sm'>Circulating Supply</h2>
                                    <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-20 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">{coin?.market_data?.circulating_supply.toLocaleString()}</span>
                                </div>
                                <div className='flex items-center space-x-6'>
                                    <h2 className='text-sm'>Website</h2>
                                    <div className='flex flex-wrap items-center gap-2'>
                                        {homepagesResults?.map((homepage, i) => {
                                            return (
                                                <div key={i}>
                                                    <a 
                                                        rel="noopener noreferrer"
                                                        href={homepage}
                                                        target='_blank' 
                                                        className="flex items-center text-xs py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded"
                                                    >
                                                        {homepage.replace('http://','').replace('http://','').replace('https://','').split(/[/?#]/)[0]}
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='flex items-center space-x-6 '>
                                    <h2 className='text-sm'>Explorer</h2>
                                    <div className='flex flex-wrap items-center gap-2'>
                                        {explorersResults?.map((explorer, i) => {
                                            return (
                                                <div key={i}>
                                                    <a 
                                                        rel="noopener noreferrer"
                                                        href={explorer}
                                                        target='_blank' 
                                                        className="flex items-center  text-xs py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded"
                                                    >
                                                        {explorer.replace('http://','').replace('https://','').split(/[/?#.]/)[0]}
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* <div className='flex items-center space-x-2'>
                                    <h2 className='text-sm'>Wallets</h2>
                                    <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">Rank #1</span>
                                    <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">Rank #1</span>
                                    <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">Rank #1</span>
                                    <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">Rank #1</span>
                                </div> */}
                                <div className='flex items-center space-x-6'>
                                    <h2 className='text-sm'>Community</h2>
                                    <div className='flex items-center gap-2'>
                                        <a 
                                            rel="noopener noreferrer"
                                            href={`https://twitter.com/${coin?.links?.twitter_screen_name}`}
                                            target='_blank' 
                                            className="flex items-center space-x-2 text-xs py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded"
                                        >
                                        <ion-icon name="logo-twitter"></ion-icon> <span>Twiiter</span>
                                        </a>
                                        <a 
                                            rel="noopener noreferrer"
                                            href={`https://facebook.com/${coin?.links?.facebook_username}`}
                                            target='_blank' 
                                            className="flex items-center space-x-2 text-xs py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded"
                                        >
                                        <ion-icon name="logo-facebook"></ion-icon> <span>Facebook</span>
                                        </a>
                                        <a 
                                            rel="noopener noreferrer"
                                            href={coin?.links?.subreddit_url}
                                            target='_blank' 
                                            className="flex items-center space-x-2 text-xs py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded"
                                        >
                                        <ion-icon name="logo-reddit"></ion-icon> <span>Reddit</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-6'>
                                    <h2 className='text-sm whitespace-nowrap'>Source Code</h2>
                                    <div className='flex flex-wrap items-center gap-2'>
                                        {sourceCode?.map((source, i) => {
                                            return (
                                                <div key={i}>
                                                    <a 
                                                        rel="noopener noreferrer"
                                                        href={source}
                                                        target='_blank' 
                                                        className="flex items-center space-x-2 text-xs py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded"
                                                    >
                                                    <ion-icon name="logo-github"></ion-icon> <span>Github </span>
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='md:col-span-2'>
                                    <div className='flex items-center space-x-6'>
                                        <h2 className='text-sm'>Tags</h2>
                                        <div className='flex flex-wrap items-center gap-2'>
                                            {Categories?.map((category, i) => {
                                                return (
                                                    <div key={i}>
                                                        <span className="text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline tracking-wider font-bold dark:bg-summary dark:bg-opacity-50 bg-dark bg-opacity-10 dark:text-white text-gray-900 rounded">{category}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Info Ends */}
                        </div>
                    </div>
                    {/* Col 1 Ends  */}

                    {/* Col 2  */}
                    <div className=''>
                        <div className=' text-md md:w-5/6 w-96 px-8 py-4 dark:bg-gray-700 bg-gray-300 bg-opacity-30 rounded hover:shadow-xl shadow-md md:mt-0 mt-12'>

                            <h2 className='text-center text-2xl font-semibold mb-6'>{coin.name} Price Statistics</h2>

                            <div className='grid gap-4 mt-2'>
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>Bitcoin Price</h2>
                                    <h2 className=' text-end'>{coin?.market_data?.current_price.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                                </div>
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>24h Low / 24h High</h2>
                                    <div className="flex justify-end space-x-1">
                                        <h2 className=''>{coin?.market_data?.low_24h.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2> 
                                        <span>/</span> 
                                        <h2 className=''>{coin?.market_data?.high_24h.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2> 
                                    </div>
                                </div>
                                {/* <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>7d Low / 7d High</h2>
                                    <h2 className=' text-end'>$16,851</h2>
                                </div> */}
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>Trading Volume</h2>
                                    <h2 className=' text-end'>{coin?.market_data?.total_volume?.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                                </div>
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>Market Cap Rank</h2>
                                    <h2 className=' text-end'>{coin?.market_data?.market_cap_rank}</h2>
                                </div>
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>Market Cap</h2>
                                    <h2 className=' text-end'>{coin?.market_data?.market_cap?.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                                </div>
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>All Time High</h2>
                                    <div className='flex flex-wrap items-center justify-end space-x-2'>
                                        <h2 className=''>{coin?.market_data?.ath?.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                                        <h2 className='text-red-500'>{coin?.market_data?.ath_change_percentage?.usd.toFixed(2)}%</h2>
                                        <h2 className='text-sm'>{Moment(coin?.market_data?.ath_date?.usd).format('d MMM, YYYY')}</h2>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 border-b border-gray-500'>
                                    <h2 className='font-semibold tracking-wide text-sm'>All Time Low</h2>
                                    <div className='flex flex-wrap items-center justify-end space-x-2'>
                                        <h2 className=' text-end'>{coin?.market_data?.atl?.usd.toLocaleString("en-US", {style:"currency", currency:"USD"})}</h2>
                                        <h2 className='text-lime-500'>{coin?.market_data?.atl_change_percentage?.usd.toFixed(2)}%</h2>
                                        <h2 className='text-sm'>{Moment(coin?.market_data?.atl_date?.usd).format('d MMM, YYYY')}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Col 2 End */}
                </div>

                {/* What is  */}
                <CoinDescription coin={coin} />
            </div>
        }
        {/* Modal  */}
        <ShareModal onClose={handleOnClose} visible={showModal} />
    </div>
  )
}

export default Coin