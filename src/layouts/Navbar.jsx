import { useState } from 'react'
import {Link} from 'react-router-dom'
import Darkmode from './Darkmode'

import Logo from '../assets/svg/logo.svg'
import Usd from '../assets/svg/usd.svg'
import UsdArrow from '../assets/svg/usdArrow.svg'
import Search from '../assets/svg/search.svg'


function Navbar() {

    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)  

  return (
    // <div>
    //     <img src={Logo} alt="Coingetter" />
    //     Hello
    // </div>
    <div className='overflow-hidden'>
        <nav className="bg-inherit py-2">
            <div className="md:px-14 px-4 flex items-center justify-between text-sm ">
                
                {/*  Menu  */}
                <div className='z-50 lg:w-auto w-full flex items-center justify-between '>
                    {/* DarkMode  */}
                    <div className='relative hidden'>
                        <Darkmode />
                    </div>
                    {/* {open ? 
                        <Link onClick={closeMenu}>
                            <img src={Logo} alt="Logo" className='lg:cursor-pointer h-12 ' />
                        </Link>
                        :
                        <Link >
                            <div className='flex items-center'>
                                <img src={Logo} alt="Logo" className='lg:cursor-pointer h-12' />
                                <h2 className='tracking-wider text-3xl'>CoinGetter</h2>
                            </div>
                        </Link>
                    } */}
                    <Link onClick={closeMenu}>
                        <div className='flex items-center'>
                            <img src={Logo} alt="Logo" className='lg:cursor-pointer h-12' />
                            <h2 className='tracking-wider text-2xl'>CoinGetter</h2>
                        </div>
                    </Link>
                    <div className='flex items-center space-x-2 lg:hidden'>
                        <button type="submit" className="">
                            <img src={Search} alt="search" />
                        </button>

                        {/* <form action="" class="relative">
                        <input type="search" 
                                class="peer cursor-pointer relative z-10 h-8 w-8 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                        <img 
                            src={Search} 
                            alt="search"
                            class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" 
                        />
                        </form> */}

                        <div className='text-3xl  rounded-md w-8 h-8' onClick={() => setOpen(!open)}>
                            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                        </div>
                    </div>
                </div>

                {/* Large screen  */}
                <ul className='lg:flex py-2 text-lg hidden items-center gap-8'>
                    <li>
                        <div className="pt-2 flex items-center relative mx-auto dark:text-gray-500 text-tableDark">
                            <input className="dark:bg-search bg-green dark:bg-opacity-20 bg-opacity-40 h-10 px-5 pr-16 text-sm focus:outline-none" placeholder="Search coin name ..." />
                            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                <img src={Search} alt="search" />
                            </button>
                        </div>
                    </li>
                    <li className='inline-block'>
                        Cryptocurrencies
                    </li>
                    <li className='inline-block'>
                        Exchanges
                    </li>
                    <li className='inline-block'>
                        NFT
                    </li>
                    <li className='inline-block'>
                        Learn
                    </li>
                    <li className='inline-block'>
                        Product
                    </li>
                    <li className='inline-block'>
                        Portfolio
                    </li>
                </ul>

                <ul className='lg:flex hidden uppercase items-center space-x-8'>
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
                {/* Large screen ends */}

                {/* Mobile Menu  */}
                <ul className={`
                   dark:text-white text-dark lg:hidden dark:bg-dark bg-white absolute bottom-0 w-full h-screen border-2 py-24 px-12
                    delay-100 duration-500 z-10 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                
                    {/* <li>
                        <div className="pt-2 flex items-center relative mx-auto dark:text-gray-300 text-tableDark">
                            <input className="w-full dark:bg-gray-300 bg-green dark:bg-opacity-20 bg-opacity-40 h-10 px-3 text-sm focus:outline-none" placeholder="Search coin name ..." />
                            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                <img src={Search} alt="search" />
                            </button>
                        </div>
                        
                    </li> */}
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        Cryptocurrencies
                    </li>
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        Exchanges
                    </li>
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        NFT
                    </li>
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        Learn
                    </li>
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        Product
                    </li>
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        Portfolio
                    </li>
                    <li className='py-3 text-center px-3 text-2xl' onClick={closeMenu}>
                        <div className=''>
                            <Darkmode />
                        </div>
                    </li>
                    {/* <li>
                        <button className='bg-lime-300 py-1 px-4 rounded-full text-gray-700 uppercase' onClick={closeMenu}>
                            Connect Wallet to have access
                        </button>
                    </li> */}
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar