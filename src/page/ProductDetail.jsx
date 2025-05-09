import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams(); ////get id
  const [product, setProduct] = useState(null); //// product เป็น null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPromptpayModal, setShowPromptpayModal] = useState(false);
  const [showTrueWalletModal, setShowTrueWalletModal] = useState(false);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get('/data/Productvalo.json');
      setProduct(data.find(p => p.id === +id));
    } catch {
      setError('ไม่สามารถโหลดข้อมูลได้');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  ////click ซื้อเลย /////////
  const handleBuyNow = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentOptions(false);

    if (method === 'พร้อมเพย์') {
      setShowPromptpayModal(true);
    } else if (method === 'ทวอเลท') {
      setShowTrueWalletModal(true);
    } else {

    }
  };

  const handleQRCodePaymentComplete = () => {
    setShowPromptpayModal(false);

  };

  const handleTrueWalletPaymentComplete = () => {
    setShowTrueWalletModal(false);

  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="h-screen flex items-center justify-center">
          <p className="text-2xl">โหลด...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center">
          <p className="text-2xl mb-4">{error}</p>
          <Link to="/shop">
            <button className="bg-pink-800 h-12 px-6 rounded-3xl shadow-xl text-white hover:bg-pink-900">
              หน้าร้านค้า
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center">
          <p className="text-2xl mb-4">ไม่พบสินค้า</p>
          <Link to="/shop">
            <button className="bg-pink-800 h-12 px-6 rounded-3xl shadow-xl text-white hover:bg-pink-900">
              หน้าร้านค้า
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-cover bg-center py-20" style={{ backgroundImage: "url('https://media.discordapp.net/attachments/1364538382939852800/1364538501777064066/detail.jpg?ex=680a0902&is=6808b782&hm=54518d5c257e2fc21a71e54b5ca3fa758b5ee1c3494dc4e14fd60a71c36163c8&=&format=webp&width=1768&height=834')" }}>
        <div className="container mx-auto px-4 pt-20">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-6xl mx-auto">
            <div className="flex justify-end">
              <Link to="/Shop">
                <button className='bg-gray-500 px-12 py-4 rounded-full shadow-2xl text-white text-xl hover:bg-gray-700'>กลับ</button>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-5">
              {/* Product Image */}
              <div className="md:w-1/2">
                <img
                  src={product.valoimg}
                  alt={product.rank}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 flex flex-col">
                <h1 className="text-4xl font-bold mb-4">Rank: {product.rank}</h1>
                <h2 className="text-3xl text-pink-800 font-bold mb-6">฿{product.price}</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">รายละเอียด:</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">คุณสมบัติ:</h3>
                  <ul className="list-disc pl-5">
                    {product.features && product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    className="bg-green-700 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-900 transition-colors w-full"
                    onClick={handleBuyNow}
                  >
                    ซื้อเลย
                  </button>
                </div>
              </div>
            </div>

            {/* Payment options */}
            {showPaymentOptions && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-md w-full">
                  <h2 className="text-2xl font-bold mb-6 text-center">ช่องทางชำระ</h2>
                  <div className="space-y-4">
                    <button
                      onClick={() => handlePaymentSelection('พร้อมเพย์')}
                      className="flex items-center justify-between w-full bg-blue-50 hover:bg-blue-100 p-4 rounded-lg border border-blue-200"
                    >
                      <img src="https://media.discordapp.net/attachments/1364538382939852800/1364538503874216018/promptpay.png?ex=680a0903&is=6808b783&hm=39008942005ad031d34d75dc30c883ed21cd0575c272064b159216dfc3dadb46&=&format=webp&quality=lossless" alt="" />
                    </button>
                    <button
                      onClick={() => handlePaymentSelection('ทวอเลท')}
                      className="flex items-center justify-between w-full bg-red-50 hover:bg-red-100 p-4 rounded-lg border border-red-200"
                    >
                      <img src="https://media.discordapp.net/attachments/1364538382939852800/1364538504557756466/true.png?ex=680a0903&is=6808b783&hm=fe9030b92a19045af9e3c02788daa08379b5ab7ac2a6e36ba33895f513f96296&=&format=webp&quality=lossless" alt="" />
                    </button>
                  </div>
                  <button
                    onClick={() => setShowPaymentOptions(false)}
                    className="mt-6 w-full py-2 text-white hover:text-gray-800 bg-red-700 rounded-3xl"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            )}

            {/* Prompt Pay Modal */}
            {showPromptpayModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
                  <h2 className="text-2xl font-bold mb-4">สแกนเพื่อชำระ</h2>
                  <p className="text-gray-600 mb-6">สแกน QR Code ด้วยแอพพร้อมเพย์</p>
                  <div className="mb-6 flex justify-center">
                    <img
                      src="https://media.discordapp.net/attachments/1364538382939852800/1364538504150777936/qr_test.png?ex=680a0903&is=6808b783&hm=1014273957a01c98fdc54b4536551e1e637ffa3da1a23282601e6a13b75e0acf&=&format=webp&quality=lossless"
                      alt="PromptPay QR Code"
                      className="w-64 h-64 border rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mb-6">จำนวน: ฿{product.price}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowPromptpayModal(false)}
                      className="flex-1 py-2 px-4 border border-gray-300  text-white hover:bg-red-900 bg-red-700 rounded-3xl"
                    >
                      ยกเลิก
                    </button>
                    {/* <button
                      onClick={handleQRCodePaymentComplete}
                      className="flex-1 py-2 px-4 bg-green-600 rounded-lg text-white hover:bg-green-700"
                    >
                      ชำระแล้ว
                    </button> */}
                  </div>
                </div>
              </div>
            )}

            {/* True Wallet Modal */}
            {showTrueWalletModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
                  <h2 className="text-2xl font-bold mb-4">ชำระด้วยทวอเลท</h2>
                  <p className="text-gray-600 mb-6">สแกน QR Code ด้วยแอพทวอเลท</p>
                  <div className="mb-6 flex justify-center">
                    <img
                      src="https://media.discordapp.net/attachments/1364538382939852800/1364538504150777936/qr_test.png?ex=680a0903&is=6808b783&hm=1014273957a01c98fdc54b4536551e1e637ffa3da1a23282601e6a13b75e0acf&=&format=webp&quality=lossless"
                      alt="True Wallet QR Code"
                      className="w-64 h-64 border rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mb-6">จำนวน: ฿{product.price}</p>
                  <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="font-medium text-red-800">เบอร์ทวอเลท: 062-5232145</p>
                    <p className="text-sm text-red-700 mt-1">ชื่อผู้ใช้ทวอเลท: ชานนท์ อ้อมคำ</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowTrueWalletModal(false)}
                      className="flex-1 py-2 px-4 border border-gray-300  text-white hover:bg-red-900 bg-red-700 rounded-3xl"
                    >
                      ยกเลิก
                    </button>
                    {/* <button
                      onClick={handleTrueWalletPaymentComplete}
                      className="flex-1 py-2 px-4 bg-green-600 rounded-lg text-white hover:bg-green-700"
                    >
                      ชำระแล้ว
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
