import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <main className="h-screen w-full flex flex-col justify-center items-center bg-dark">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-green py-1 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <Link to='/' className="relative inline-block text-sm font-medium text-green group active:text-lime-700 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-deepGreen group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="relative block px-8 py-3 bg-dark border border-current">
                        <span>Go Home</span>
                    </span>
                </Link>
            </button>
        </main>
    </div>
  )
}

export default ErrorPage