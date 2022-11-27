import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CoinContext from '../context/CoinContext'

function SearchMobile() {
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


  return (
    <div className='relative' >

      <div className="mx-auto dark:text-gray-300 text-dark">
        <button type="submit" className="relative w-max">
          <input type="search" 
            onChange={handleFilter}
            className="peer cursor-pointer relative z-10 py-2 w-12 rounded-full border bg-transparent outline-none focus:w-48 focus:cursor-text focus:border-green focus:pl-16 focus:pr-4" 
          />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:text-white text-dark absolute inset-y-1.5 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-deepGreen peer-focus:stroke-green">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
      </div>

      {filteredData.length !== 0 && (
      <div className='scrollbar-hide overflow-hidden overflow-y-auto absolute top-14 left-5 w-52 h-24 rounded-lg py-1 dark:bg-gray-300 bg-gray-400 '>
        {filteredData?.slice(0,3).map((coin,i) => {
          return (
            <Link to={`/coin/${coin?.id}`} key={i} className='tracking-wider text-dark flex flex-col text-md dark:hover:bg-gray-400 hover:bg-gray-300 rounded px-2'>
              <div className="flex items-center space-x-2 space-y-2">
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

export default SearchMobile