import React from 'react'
import { ArrowRight } from 'lucide-react'

interface LandingPageProps {
  onCategoryClick: (category: string) => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onCategoryClick }) => {
  return (
    <div className="space-y-8">
      <section className="relative h-96 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Banner promocional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Bienvenido a Mi Tienda</h2>
            <p className="text-xl mb-6">Descubre nuestras increíbles ofertas del mes</p>
            <button 
              onClick={() => onCategoryClick('offers')}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Ver Ofertas
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CategoryCard 
          title="Electrónicos" 
          image="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          onClick={() => onCategoryClick('electronics')}
        />
        <CategoryCard 
          title="Moda" 
          image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          onClick={() => onCategoryClick('fashion')}
        />
        <CategoryCard 
          title="Hogar y Jardín" 
          image="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          onClick={() => onCategoryClick('home-garden')}
        />
      </section>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  image: string
  onClick: () => void
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, onClick }) => {
  return (
    <div 
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="flex items-center justify-center">
            Ver más <ArrowRight className="ml-2 w-4 h-4" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage