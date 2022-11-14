

function Spinner() {
  return (
    <div className=''>
        <div className="flex space-x-12 p-12 justify-center items-center">
            <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Spinner