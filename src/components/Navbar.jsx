import React from 'react'
import { Link } from 'react-router-dom';
import '@fontsource/nosifer'; // default 400 weight

function Navbar() {
    return (
        <>
            <nav>
                <div className='font-bold  flex fixed h-24 w-full z-50 mt-0 shadow-md items-center justify-between py-4 px-5 bg-gradient-to-br lg:px-40 from-purple-800 via-purple-950 to-gray-900 text-white'>
                    <div className='font-nosifer text-xl md:text-4xl'>
                        <p>NvaloShop</p>
                    </div>
                    <div className='flex text-sm md:text-2xl gap-x-3 md:gap-x-10'>
                        <Link className='hover:text-pink-700 hover:text-lg md:hover:text-pink-700 md:hover:text-3xl' to="/">Home</Link>
                        <Link className='hover:text-pink-700 hover:text-lg md:hover:text-pink-700 md:hover:text-3xl' to="/Shop">Shop</Link>
                        <Link className='hover:text-pink-700 hover:text-lg md:hover:text-pink-700 md:hover:text-3xl' to="/Contact">Contact</Link>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar