import React, { useContext } from 'react'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../contexts/CartContext'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center justify-center w-full hover:bg-red-700 transition-colors"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard