import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white/50 backdrop-blur-md p-10 rounded-xl shadow-lg text-black">
      <div className="flex flex-col items-center gap-4">
        {/* ตรวจสอบว่า product.valoimg มีค่าก่อนใช้ */}
        {product?.valoimg && (
          <img
            src={product?.valoimg}
            alt={product?.rank}
            className="w-48 h-48 object-cover rounded-xl shadow"
          />
        )}
        {/* แสดงข้อมูลอื่นๆ */}
        <h1 className="text-2xl ">แรงค์: {product?.rank}</h1>
        <h2 className="text-2xl">ราคา: {product?.price}</h2>
        <Link to={`/product/${product?.id}`}>
          <button className='bg-green-800 h-12 w-40 rounded-3xl shadow-xl text-white hover:bg-green-950'>
            ดูรายละเอียด
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
