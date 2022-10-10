import Up from '../../assets/svg/up.svg'
import Down from '../../assets/svg/down.svg'
import Bitcoin from '../../assets/svg/bitcoin.svg'
import Ticker from '../../assets/svg/ticker.svg'

function CoinsTable() {
  return (
    <div className='mt-8 my-8'>
        <table className="table-fixed border-separate border-spacing-y-3 w-full">
            <thead className=' h-12 bg-tableDark'>
                <tr>
                    <th></th>
                    <th>Coins</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>4h</th>
                    <th>24h</th>
                    <th>Last 7 Days</th>
                    <th>24h Volume</th>
                    <th>Market Cap</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-summary bg-opacity-10 h-16'>
                    <td className=''>
                        <div className='flex items-center ml-2 space-x-1'>
                            <ion-icon name="star-outline"></ion-icon>
                            <h1 className='text-md font-semibold'>1</h1>
                        </div>
                    </td>
                    <td className=''>
                        <div className='flex items-center space-x-3'>
                            <div className='h-12 w-12 rounded-full bg-transparent border border-gray-500 flex items-center justify-center'>
                                <img src={Bitcoin} alt="bitcoin" className='h-8 w-8' />
                            </div>
                            <div className='flex-col'>
                                <h1 className='uppercase'>Btc</h1>
                                <h1 className='text-gray-400 tracking-wide font-light'>Bitcoin</h1>
                            </div>
                        </div>
                    </td>
                    <td className=''>
                        <h1 className='text-center'>$19,876</h1>
                    </td>
                    <td className=''>
                        <h1 className='text-center text-red-800'>-0.14%</h1>
                    </td>
                    <td className=''>
                        <h1 className='text-center text-lightGreen'>1.4%</h1>
                    </td>
                    <td className=''>
                        <h1 className='text-center text-lightGreen'>12.4%</h1>
                    </td>
                    <td className=''>
                        <img src={Up} alt="Up" />
                    </td>
                    <td className=''>
                        <h1 className='text-center'>24,549.71M</h1>
                    </td>
                    <td className=''>
                        <h1 className='text-center'>$24,549,956.71M</h1>
                    </td>
                    <td className='text-center'>
                        <button className='bg-gray-600 h-8 w-8 rounded-full'>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CoinsTable