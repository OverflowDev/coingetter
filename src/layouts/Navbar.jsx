import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Darkmode from './Darkmode'

import Logo from '../assets/svg/logo.svg'
import Usd from '../assets/svg/usd.svg'
import UsdArrow from '../assets/svg/usdArrow.svg'
import Search from '../assets/svg/search.svg'


function Navbar() {

    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)
    const [cart, setCart] = useState(1)
    const [amount, setAmount] = useState(1)

    
    const [theme, setTheme] = useState(localStorage.theme)
    // const [theme, setTheme] = useState('dark')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    
    useEffect(() => {
        const rootElement = window.document.documentElement

        rootElement.classList.remove(colorTheme)
        rootElement.classList.add(theme)
        // optional 
        localStorage.setItem('theme', theme)

    }, [theme, colorTheme])

  return (
    // <div>
    //     <img src={Logo} alt="Coingetter" />
    //     Hello
    // </div>
    <div className='overflow-hidden'>
        <nav className="bg-inherit py-2 px-8">
            <div className="flex items-center text-sm justify-around">
                
                {/*  Menu  */}
                <div className='z-50 p-3 md:w-auto w-full flex items-center justify-between'>
                    <div className='text-3xl md:hidden rounded-md w-8 h-8' onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                    </div>
                    {open ? 
                        <Link to='/' onClick={closeMenu}>
                            <img src={Logo} alt="Logo" className='md:cursor-pointer h-12' />
                        </Link>
                        :
                        <Link to='/'>
                            <div className='flex items-center'>
                                <img src={Logo} alt="Logo" className='md:cursor-pointer h-12' />
                                <h2 className='tracking-wider text-3xl'>CoinGetter</h2>
                            </div>
                        </Link>
                    }
                    {/* Cart  */}
                    <div className='relative md:hidden'>
                        <Darkmode />
                    </div>
                </div>


                <ul className='md:flex py-2 text-lg hidden items-center gap-8'>
                    <li>
                        <div class="pt-2 flex items-center relative mx-auto text-gray-500">
                            <input class="bg-search bg-opacity-20 h-10 px-5 pr-16 text-sm focus:outline-none" placeholder="Search coin name ..." />
                            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg> */}
                                <img src={Search} alt="search" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <Link to='/shop' className=' inline-block'>
                            Cryptocurrencies
                        </Link>
                    </li>
                    <li>
                        <Link to='/partners' className='inline-block'>
                            Exchanges
                        </Link>
                    </li>
                    <li>
                        <Link to='/partners' className='inline-block'>
                            NFT
                        </Link>
                    </li>
                    <li>
                        <Link to='/partners' className='inline-block'>
                            Learn
                        </Link>
                    </li>
                    <li>
                        <Link to='/partners' className='inline-block'>
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to='/partners' className='inline-block'>
                            Portfolio
                        </Link>
                    </li>
                </ul>

                <ul className='md:flex hidden uppercase items-center gap-8'>
                    {/* Cart  */}
                    <li className='py-2 flex items-center space-x-2 px-4 border-2'>
                        <img src={Usd} alt="Usd" className='h-6 w-6' />
                        <h1 className='tracking-wider font-semibold'>USD</h1>
                        <img src={UsdArrow} alt="arrow" />
                    </li>
                    <li className='flex relative'>
                        <Darkmode />
                    </li>
                </ul>


                {/* Mobile Menu  */}
                <ul className={`
                    md:hidden bg-white absolute w-full h-screen bottom-0 py-24 pl-4
                    duration-500 z-10 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                
                    <li>
                        <Link to='/shop' className='py-7 px-3 text-4xl inline-block' onClick={closeMenu}>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to='/partners' className='py-7 px-3 text-4xl inline-block' onClick={closeMenu}>
                            Partners
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/profile' className="py-7 px-3 text-4xl inline-block" onClick={closeMenu}>
                            {/* <ion-icon name="person-outline" size="large"></ion-icon> */}
                        Profile
                        </Link>
                    </li>
                    <li>
                        <button className='bg-lime-300 py-1 px-4 rounded-full text-gray-700 uppercase' onClick={closeMenu}>
                            Connect Wallet to have access
                        </button>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar