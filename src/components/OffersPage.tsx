import React from 'react'
import ProductCard from './ProductCard'

const OffersPage: React.FC = () => {
  const offers = [
    { id: 1, name: 'Smart TV 4K', price: 7999, originalPrice: 9999, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Zapatillas Deportivas', price: 799, originalPrice: 1299, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Set de Ollas', price: 1499, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1584990347449-a8f1d9dd7f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Cámara DSLR', price: 9999, originalPrice: 12999, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Ofertas del Mes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map(offer => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={offer.image} alt={offer.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{offer.name}</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-red-600 font-bold">${offer.price.toFixed(2)}</p>
                  <p className="text-gray-500 line-through text-sm">${offer.originalPrice.toFixed(2)}</p>
                </div>
                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">
                  {Math.round((1 - offer.price / offer.originalPrice) * 100)}% OFF
                </span>
              </div>
              <button 
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full w-full hover:bg-red-700 transition-colors"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OffersPage