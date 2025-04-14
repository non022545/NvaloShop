import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="bg-white/50 backdrop-blur-md p-10 rounded-xl shadow-lg text-black">
      <div className="flex flex-col items-center gap-4">
        {/* ภาพ */}
        {product.valoimg && (
          <img
            src={product.valoimg}
            alt={product.rank}
            className="w-48 h-48 object-cover rounded-xl shadow"
          />
        )}
        {/* ชื่อ */}
        <h1 className="text-2xl ">Rank: {product.rank}</h1>
        <h2 className="text-2xl">Price: {product.price}</h2>
        <Link to={`/product/${product.id}`}>
          <button className='bg-pink-800 h-12 w-40 rounded-3xl shadow-xl text-white hover:bg-pink-900'>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
