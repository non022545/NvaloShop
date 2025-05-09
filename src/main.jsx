import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import Shop from './page/Shop.jsx'
import Contact from './page/Contact.jsx'
import ProductDetail from './page/ProductDetail.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Shop',
    element: <Shop />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Product/:id',
    element: <ProductDetail />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)




