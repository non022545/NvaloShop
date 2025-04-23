import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router'

function Home() {
    return (
        <div>
            <Navbar />
            <div className="h-auto min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://media.discordapp.net/attachments/1364538382939852800/1364538502120865875/pagehome.jpeg?ex=680a0902&is=6808b782&hm=b04f21d19162450c2f08dc045bbf42c47d27b7ccbc95dfb9ab819f7e63154fe0&=&format=webp&width=1535&height=863')" }}>

                <div className="h-auto min-h-screen bg-cover bg-center text-white px-6 py-12 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-center  bg-black/80 backdrop-blur-md h-96 w-auto rounded-xl shadow-lg text-white">
                        <h1 className="text-5xl font-extrabold mb-4">
                            Welcome to <span className="text-pink-800">Nvaloshop</span>
                        </h1>

                        <p className="text-lg px-8 max-w-5xl mb-8 text-gray-300">
                            🎯 เว็บขายไอดี Valorant คุณภาพ ราคาประหยัด พร้อมสกินเทพ Rank สูง และบริการหลังการขายระดับเทพ 🔥
                        </p>


                        <Link to="/shop">
                            <button className="bg-green-800 hover:bg-green-950 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all">
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