import React, { useContext } from 'react'
import { ShoppingCart, Search, User } from 'lucide-react'
import { CartContext } from '../contexts/CartContext'
import { AuthContext } from '../contexts/AuthContext'

interface HeaderProps {
  onCartClick: () => void
  onAuthClick: () => void
  onPageChange: (page: string) => void
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onAuthClick, onPageChange }) => {
  const { cart } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => onPageChange('home')}>Mi Tienda</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" onClick={() => onPageChange('home')} className="hover:text-gray-200">Inicio</a></li>
            <li><a href="#" onClick={() => onPageChange('offers')} className="hover:text-gray-200">Ofertas del Mes</a></li>
            <li><a href="#" onClick={() => onPageChange('electronics')} className="hover:text-gray-200">Electrónicos</a></li>
            <li><a href="#" onClick={() => onPageChange('fashion')} className="hover:text-gray-200">Moda</a></li>
            <li><a href="#" onClick={() => onPageChange('home-garden')} className="hover:text-gray-200">Hogar y Jardín</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer" />
          {user ? (
            <div className="flex items-center space-x-2">
              <span>{user.email}</span>
              <button onClick={logout} className="text-sm hover:underline">Cerrar sesión</button>
            </div>
          ) : (
            <User className="w-6 h-6 cursor-pointer" onClick={onAuthClick} />
          )}
          <div className="relative" onClick={onCartClick}>
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header