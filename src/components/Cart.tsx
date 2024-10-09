import React, { useContext, useState } from 'react'
import { X } from 'lucide-react'
import { CartContext } from '../contexts/CartContext'
import { AuthContext } from '../contexts/AuthContext'

interface CartProps {
  onClose: () => void
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext)
  const { user } = useContext(AuthContext)
  const [isProcessing, setIsProcessing] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (!user) {
      alert('Por favor, inicia sesión para continuar con la compra.')
      return
    }
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      clearCart()
      alert('¡Compra realizada con éxito!')
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrito de compras</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex justify-between items-center mb-2">
                <span>{item.name}</span>
                <div>
                  <span className="mr-2">${item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="bg-red-600 text-white px-4 py-2 rounded-full w-full hover:bg-red-700 transition-colors disabled:bg-gray-400"
              >
                {isProcessing ? 'Procesando...' : 'Proceder al pago'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart