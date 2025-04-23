import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); // สถานะการโหลดข้อมูล
  const [error, setError] = useState(null); // สถานะข้อผิดพลาด

  
  const fetchProduct = async () => {
    try {
      const response = await axios.get('/data/Productvalo.json');
      setProducts(response.data);
    } catch (error) {
      setError('ไม่สามารถโหลดข้อมูลได้');
    } finally {
      setLoading(false); // เปลี่ยนสถานะเป็นไม่โหลดเมื่อทำงานเสร็จ
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);  

  
  if (loading) return <div>กำลังโหลด...</div>; // ขณะโหลดข้อมูล
  if (error) return <div>{error}</div>; // ถ้ามีข้อผิดพลาด

  return (
    <div>
      <Navbar />
      <div className="h-auto min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('images/pageshop.png')" }}>
        <div className='pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-10'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop
