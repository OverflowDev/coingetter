import Categories from './Categories'
import CoinsTable from './CoinsTable'

function Coins() {
    return (
    <div className='mt-6'>
        <div className='md:px-14 px-4'>
            <div className="flex flex-col">
                <div className=''>
                    <Categories />
                </div>
                <div>
                    <CoinsTable />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coins