import React from 'react'
import { Link } from 'react-router-dom';
import '@fontsource/nosifer'; // default 400 weight

function Navbar() {
    return (
        <>
            <nav>
                <div className='font-bold text-2xl flex fixed h-20 w-full z-50 mt-0 shadow items-center justify-between py-4 px-64 bg-gradient-to-br from-purple-800 via-purple-950 to-gray-900 text-white'>
                    <div className='font-nosifer text-4xl'>
                        <p>NvaloShop</p>
                    </div>
                    <div className='flex gap-x-10'>
                        <Link className='hover:text-pink-700' to="/">Home</Link>
                        <Link className='hover:text-pink-700' to="/Shop">Shop</Link>
                        <Link className='hover:text-pink-700' to="/Contact">Contact</Link>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar