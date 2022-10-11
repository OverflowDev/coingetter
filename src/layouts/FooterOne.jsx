import Logo from '../assets/svg/logo.svg'

function FooterOne() {
  return (
    <>
    <footer className="bg-inherit mt-2">
        <div className="max-w-screen-xl py-16 px-14">

            <div className="grid grid-cols-1 lg:grid-cols-6">
                
                <div className="grid grid-cols-1 gap-8 lg:col-span-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="font-semibold dark:text-white text-black uppercase">
                            Company
                        </p>
                        <nav className="flex flex-col mt-4 space-y-5 text-sm dark:text-gray-200">
                            <h1 className="hover:opacity-75"> About Us</h1>
                            <h1 className="hover:opacity-75"> Terms of use </h1>
                            <h1 className="hover:opacity-75"> Privacy and policy </h1>
                            <h1 className="hover:opacity-75"> Community rules </h1>
                            <h1 className="hover:opacity-75"> Disclaimer rules </h1>
                        </nav>
                    </div>
                    <div>
                        <p className="font-semibold dark:text-white text-black uppercase">
                            Support
                        </p>
                        <nav className="flex flex-col mt-4 space-y-5 text-sm dark:text-gray-200">
                            <h1 className="hover:opacity-75"> Request Form </h1>
                            <h1 className="hover:opacity-75"> Contact Support </h1>
                            <h1 className="hover:opacity-75"> FAQ </h1>
                            <h1 className="hover:opacity-75"> Glossary </h1>
                            <h1 className="hover:opacity-75"> Advertising </h1>
                        </nav>
                    </div>
                    <div>
                        <p className="font-semibold dark:text-white text-black uppercase">
                            Socials
                        </p>
                        <nav className="flex flex-col mt-4 space-y-5 text-sm dark:text-gray-200">
                            <h1 className="hover:opacity-75"> Twitter </h1>
                            <h1 className="hover:opacity-75"> Instagram </h1>
                            <h1 className="hover:opacity-75"> Facebook </h1>
                            <h1 className="hover:opacity-75"> Interactive Chat </h1>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={Logo} alt="Logo" className='md:cursor-pointer h-12' />
                        <h2 className='tracking-wider text-3xl'>CoinGetter</h2>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
    </>
  )
}

export default FooterOne