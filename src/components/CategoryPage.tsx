import React from 'react'
import ProductCard from './ProductCard'

interface CategoryPageProps {
  category: string
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const products = getProductsByCategory(category)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

const getProductsByCategory = (category: string) => {
  // This is a mock function. In a real application, you would fetch this data from an API or database.
  const allProducts = [
    { id: 1, name: 'Smartphone XYZ', price: 5999, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'electronics' },
    { id: 2, name: 'Laptop ABC', price: 12999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'electronics' },
    { id: 3, name: 'Vestido Elegante', price: 1299, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'fashion' },
    { id: 4, name: 'Traje Formal', price: 2999, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'fashion' },
    { id: 5, name: 'Set de Jardín', price: 3999, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'home-garden' },
    { id: 6, name: 'Sofá Moderno', price: 7999, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'home-garden' },
  ]

  return allProducts.filter(product => product.category === category)
}

export default CategoryPage