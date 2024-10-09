import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Auth from './components/Auth'
import LandingPage from './components/LandingPage'
import CategoryPage from './components/CategoryPage'
import OffersPage from './components/OffersPage'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onCategoryClick={(category) => setCurrentPage(category)} />
      case 'offers':
        return <OffersPage />
      default:
        return <CategoryPage category={currentPage} />
    }
  }

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header 
            onCartClick={() => setShowCart(true)} 
            onAuthClick={() => setShowAuth(true)}
            onPageChange={setCurrentPage}
          />
          <main className="flex-grow container mx-auto px-4 py-8">
            {renderPage()}
          </main>
          <Footer />
          {showCart && <Cart onClose={() => setShowCart(false)} />}
          {showAuth && <Auth onClose={() => setShowAuth(false)} />}
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App