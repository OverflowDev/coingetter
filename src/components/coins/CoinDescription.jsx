import {useState} from 'react'

function CoinDescription({coin}) {

    const description = coin?.description?.en

    const [isReadMore, setIsReadMore] = useState(false)

    const toggleReadMore = () => {
        setIsReadMore(prevState => ! prevState)
    }

    if(!coin) return null

  return (
    <div>
        <div className='mt-12 mx-auto md:w-full md:max-w-2xl'>
            <h2 className='text-center md:text-5xl text-3xl uppercase tracking-wider border-b'>What is {coin.name}</h2>
            <p className='leading-2 text-center mt-2'>
                {/* {coin?.description?.en} */}
                {isReadMore ? <div>
                        {description}
                    </div> 
                    :
                    <div>
                        {description.substr(0,500)}
                    </div> 
                }
            </p>
            <div className="flex justify-center">
                <button 
                    className='px-2 py-1 border bg-inherit hover:bg-gray-500 rounded tracking-wider'
                    onClick={toggleReadMore}
                >
                    {isReadMore ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default CoinDescription