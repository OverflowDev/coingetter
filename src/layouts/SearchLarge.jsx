import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CoinContext from '../context/CoinContext'

function SearchLarge() {

    const {coins} = useContext(CoinContext)

    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (e) => {
        const searchWord = e.target.value
        setWordEntered(searchWord)
        const newFilter = coins.filter((value) => {
            return value?.name?.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered('')
    }

  return (
    <div className='relative' >

        <div className="pt-2 flex items-center relative mx-auto dark:text-gray-300 text-white">
            <input 
                className="dark:bg-search bg-gray-800 dark:bg-opacity-20 h-10 px-5 pr-16 text-sm focus:outline-none" 
                placeholder="Search coin name ..." 
                value={wordEntered}
                onChange={handleFilter}
            />
            {filteredData.length === 0 ? (
                <button 
                    className="absolute right-0 top-0 mt-5 mr-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                ) : (
                <button 
                    onClick={clearInput}
                    className="absolute right-0 top-0 mt-5 mr-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>

        {filteredData.length !== 0 && (
            <div className='scrollbar-hide overflow-hidden overflow-y-auto absolute top-14 left-5 w-52 h-24 rounded-lg py-2 dark:bg-gray-300 bg-gray-400 '>
                {filteredData?.slice(0,3).map((coin,i) => {
                    return (
                        <Link to={`/coin/${coin?.id}`} key={i} className='tracking-wider text-dark flex flex-col text-md dark:hover:bg-gray-400 hover:bg-gray-300 rounded px-2'>
                            <div className="flex items-center space-x-2">
                                <img src={coin?.image} alt="Ticker" className='h-6 w-6' />
                                <p className='whitespace-nowrap'>
                                    {coin.name}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )}

    </div>
  )
}

export default SearchLarge