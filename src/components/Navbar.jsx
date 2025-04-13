import React from 'react'
import { Link } from 'react-router-dom';
import '@fontsource/nosifer'; // default 400 weight

function Navbar() {
    return (
        <>
            <nav>
                <div className='font-bold text-2xl flex fixed h-20 w-full z-50 mt-0 shadow items-center justify-between py-4 px-52 bg-gradient-to-br max-w-xs: px-10  from-purple-800 via-purple-950 to-gray-900 text-white xl:px-5'>
                    <div className='font-nosifer text-4xl max-w-sm: text-xs'>
                        <p>NvaloShop</p>
                    </div>
                    <div className='flex gap-x-10 max-w-sm: text-xs gap-x-3'>
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