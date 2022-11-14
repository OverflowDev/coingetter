import { useContext } from 'react'
import CoinContext from '../../context/CoinContext'
import Spinner from '../../layouts/Spinner'

import Categories from './Categories'
import CoinsTable from './CoinsTable'

function Coins() {
    const {loading} = useContext(CoinContext)

    return (
    <div className='mt-6'>
        <div className='md:px-14 px-4'>
            <div className="flex flex-col">
                <div className=''>
                    <Categories />
                </div>
                {/* {loading ? 
                    <div>
                        <Spinner />
                    </div>
                    :

                    <div>
                        <CoinsTable />
                    </div>
                } */}
                    <div>
                        <CoinsTable />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Coins