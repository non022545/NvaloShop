import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="bg-white/30 backdrop-blur-md p-10 rounded-xl shadow-lg text-black">
      <div className="flex flex-col items-center gap-4">
        {/* รูปภาพ */}
        {product.valoimg && (
          <img
            src={product.valoimg}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-xl shadow"
          />
        )}
        {/* ชื่อ */}
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <h2 className="text-xl">Price: {product.price}</h2>
        <button className='bg-pink-800 h-10 w-40 rounded-3xl shadow-xl text-white'>ดูรายละเอียด</button>
      </div>
    </div>
  )
}

export default ProductCard
