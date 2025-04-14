import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router'

function Home() {
    return (
        <div>
            <Navbar />
            <div className="h-auto min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.alphacoders.com/136/thumb-1920-1360645.jpeg')" }}>

                <div className="h-auto min-h-screen bg-cover bg-center text-white px-6 py-12 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-center  bg-black/80 backdrop-blur-md h-[750px] w-[1200px] rounded-xl shadow-lg text-white">
                        <h1 className="text-7xl font-extrabold mb-4">
                            Welcome to <span className="text-pink-800">Nvaloshop</span>
                        </h1>

                        <p className="text-xl max-w-4xl mb-8 text-gray-300 mt-5">
                            🎯 เว็บขายไอดี Valorant คุณภาพ ราคาประหยัด พร้อมสกินเทพ และบริการหลังการขายระดับเทพ 🔥
                        </p>


                        <Link to="/shop">
                            <button className="bg-pink-800 hover:bg-pink-900 h-24 w-64 mt-16 text-white px-6 py-3 rounded-full text-2xl shadow-lg transition-all">
                                เข้าหน้าร้านค้า ➜
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home