import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showPaymentProcessing, setShowPaymentProcessing] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [accountDetails, setAccountDetails] = useState({
    email: '',
    password: ''
  });
  const [showQRCode, setShowQRCode] = useState(false);
  const [showTrueWalletModal, setShowTrueWalletModal] = useState(false);

  // Sample product data (in a real app, you would fetch this from an API)
  const productvalo = [
    {
      id: 1,
      rank: 'Gold',
      price: 2200,
      valoimg: 'https://images8.alphacoders.com/135/thumbbig-1356821.webp',
      description: 'Gold rank Valorant account with premium skins and battle pass items.',
      features: ['Full access', 'Email changeable', 'Multiple premium skins', 'Battle pass completed']
    },
    {
      id: 2,
      rank: 'Bronze',
      price: 2500,
      valoimg: 'https://images2.alphacoders.com/135/thumbbig-1356617.webp',
      description: 'Bronze rank Valorant account with rare skins collection.',
      features: ['Full access', 'Email changeable', 'Rare skin collection', 'All agents unlocked']
    },
    {
      id: 3,
      rank: 'Diamond',
      price: 1000,
      valoimg: 'https://images.alphacoders.com/132/thumbbig-1327330.webp',
      description: 'Diamond rank Valorant account for competitive players.',
      features: ['Full access', 'Email changeable', 'High MMR', 'Premium weapon skins']
    },
    {
      id: 4,
      rank: 'Platinum',
      price: 1200,
      valoimg: 'https://images4.alphacoders.com/132/thumbbig-1322722.webp',
      description: 'Platinum rank Valorant account with exclusive items.',
      features: ['Full access', 'Email changeable', 'Exclusive knife skins', 'Limited edition items']
    },
    {
      id: 5,
      rank: 'Iron',
      price: 1300,
      valoimg: 'https://images.alphacoders.com/134/thumbbig-1345035.webp',
      description: 'Iron rank Valorant account with basic setup.',
      features: ['Full access', 'Email changeable', 'Basic skin collection', 'Starter pack included']
    },
    {
      id: 6,
      rank: 'Silver',
      price: 1700,
      valoimg: 'https://images2.alphacoders.com/135/thumbbig-1356853.webp',
      description: 'Silver rank Valorant account with premium content.',
      features: ['Full access', 'Email changeable', 'Premium content unlocked', 'Special edition skins']
    },
    {
      id: 7,
      rank: 'Immortal',
      price: 2000,
      valoimg: 'https://images.alphacoders.com/135/thumbbig-1356698.webp',
      description: 'Immortal rank Valorant account for serious players.',
      features: ['Full access', 'Email changeable', 'Top tier MMR', 'Complete skin collection']
    },
    {
      id: 8,
      rank: 'Ascendant',
      price: 1500,
      valoimg: 'https://images7.alphacoders.com/137/thumbbig-1370812.webp',
      description: 'Ascendant rank Valorant account with premium benefits.',
      features: ['Full access', 'Email changeable', 'Premium battle pass', 'Exclusive agent skins']
    }
  ];

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = productvalo.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  const handleBuyNow = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentOptions(false);
    
    if (method === 'พร้อมเพย์') {
      // Show QR code instead of processing screen
      setShowQRCode(true);
    } else if (method === 'ทวอเลท') {
      // Show True Wallet modal
      setShowTrueWalletModal(true);
    } else {
      // For other payment methods, show processing screen
      setShowPaymentProcessing(true);
      
      // Simulate payment verification
      setTimeout(() => {
        setShowPaymentProcessing(false);
        
        setAccountDetails({
          email: `valorant${Math.floor(1000 + Math.random() * 9000)}@example.com`,
          password: `Pass${Math.floor(1000 + Math.random() * 9000)}`
        });
        
        setShowAccountDetails(true);
      }, 3000);
    }
  };

  const handleQRCodePaymentComplete = () => {
    setShowQRCode(false);
    setShowPaymentProcessing(true);
    
    // Simulate payment verification
    setTimeout(() => {
      setShowPaymentProcessing(false);
      setAccountDetails({
        email: `valorant${Math.floor(1000 + Math.random() * 9000)}@example.com`,
        password: `Pass${Math.floor(1000 + Math.random() * 9000)}`
      });
      setShowAccountDetails(true);
    }, 2000);
  };

  const handleTrueWalletPaymentComplete = () => {
    setShowTrueWalletModal(false);
    setShowPaymentProcessing(true);
    
    // Simulate payment verification
    setTimeout(() => {
      setShowPaymentProcessing(false);
      setAccountDetails({
        email: `valorant${Math.floor(1000 + Math.random() * 9000)}@example.com`,
        password: `Pass${Math.floor(1000 + Math.random() * 9000)}`
      });
      setShowAccountDetails(true);
    }, 2000);
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

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center">
          <p className="text-2xl mb-4">ไม่พบค้า</p>
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
      <div className="min-h-screen bg-cover bg-center py-20" style={{ backgroundImage: "url('https://images7.alphacoders.com/136/thumb-1920-1369073.jpg')" }}>
        <div className="container mx-auto px-4 pt-20">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
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
                  <h3 className="text-xl font-semibold mb-2">:</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">:</h3>
                  <ul className="list-disc pl-5">
                    {product.features && product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <button 
                    className="bg-pink-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-pink-900 transition-colors w-full"
                    onClick={handleBuyNow}
                  >
                    ซื้อเลย
                  </button>
                </div>
              </div>
            </div>
            
            {/* Payment Options Modal */}
            {showPaymentOptions && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-md w-full">
                  <h2 className="text-2xl font-bold mb-6 text-center">ช่องทางชำระ</h2>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => handlePaymentSelection('พร้อมเพย์')}
                      className="flex items-center justify-between w-full bg-blue-50 hover:bg-blue-100 p-4 rounded-lg border border-blue-200"
                    >
                      <span className="text-lg font-medium">พร้อมเพย์</span>
                      <span className="text-blue-600">→</span>
                    </button>
                    
                    <button 
                      onClick={() => handlePaymentSelection('ทวอเลท')}
                      className="flex items-center justify-between w-full bg-red-50 hover:bg-red-100 p-4 rounded-lg border border-red-200"
                    >
                      <span className="text-lg font-medium">ทวอเลท</span>
                      <span className="text-red-600">→</span>
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setShowPaymentOptions(false)}
                    className="mt-6 w-full py-2 text-gray-600 hover:text-gray-800"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            )}
          
            {/* QR Code Modal */}
            {showQRCode && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
                  <h2 className="text-2xl font-bold mb-4">สแกนเพื่อชำระ</h2>
                  <p className="text-gray-600 mb-6">สแกน QR Code ด้วยแอพพร้อมเพย์</p>
                  
                  <div className="mb-6 flex justify-center">
                    <img 
                      src="https://promptpay.io/0891234567/2000.png" 
                      alt="PromptPay QR Code" 
                      className="w-64 h-64 border rounded-lg"
                    />
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-6">
                    จำนวน: ฿{product.price}
                  </p>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowQRCode(false)}
                      className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                    >
                      ยกเลิก
                    </button>
                    <button 
                      onClick={handleQRCodePaymentComplete}
                      className="flex-1 py-2 px-4 bg-green-600 rounded-lg text-white hover:bg-green-700"
                    >
                      ชำระแล้ว
                    </button>
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
                      src="https://via.placeholder.com/300x300.png?text=TrueWallet+QR+Code"
                      alt="True Wallet QR Code" 
                      className="w-64 h-64 border rounded-lg"
                    />
                  </div>
                  
                  <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="font-medium text-red-800">เบอร์ทวอเลท: 089-123-4567</p>
                    <p className="text-sm text-red-700 mt-1">ชื่อผู้ใช้ทวอเลท: ชื่อของคุณ</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowTrueWalletModal(false)}
                      className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                    >
                      ยก
                    </button>
                    <button 
                      onClick={handleTrueWalletPaymentComplete}
                      className="flex-1 py-2 px-4 bg-green-600 rounded-lg text-white hover:bg-green-700"
                    >
                      ชำระแล้ว
                    </button>
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
