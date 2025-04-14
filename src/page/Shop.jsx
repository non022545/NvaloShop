import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

function Shop() {
  const productvalo = [
    {
      id: 1,
      rank: 'Gold',
      price: 2200,
      valoimg: 'https://images8.alphacoders.com/135/thumbbig-1356821.webp'
    },
    {
      id: 2,
      rank: 'Bronze',
      price: 2500,
      valoimg: 'https://images2.alphacoders.com/135/thumbbig-1356617.webp'
    },
    {
      id: 3,
      rank: 'Diamond',
      price: 1000,
      valoimg: 'https://images.alphacoders.com/132/thumbbig-1327330.webp'
    },
    {
      id: 4,
      rank: 'Platinum',
      price: 1200,
      valoimg: 'https://images4.alphacoders.com/132/thumbbig-1322722.webp'
    },
    {
      id: 5,
      rank: 'Iron',
      price: 1300,
      valoimg: 'https://images.alphacoders.com/134/thumbbig-1345035.webp'
    },
    {
      id: 6,
      rank: 'Silver',
      price: 1700,
      valoimg: 'https://images2.alphacoders.com/135/thumbbig-1356853.webp'
    },
    {
      id: 7,
      rank: 'Immortal',
      price: 2000,
      valoimg: 'https://images.alphacoders.com/135/thumbbig-1356698.webp'
    },
    {
      id: 8,
      rank: 'ascendant',
      price: 1500,
      valoimg: 'https://images7.alphacoders.com/137/thumbbig-1370812.webp'
    }
  ]

  return (
    <div>
      <Navbar />
      <div className="h-auto min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images7.alphacoders.com/136/thumb-1920-1369073.jpg')" }}>
        <div className='pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-10'>
          {productvalo.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop
