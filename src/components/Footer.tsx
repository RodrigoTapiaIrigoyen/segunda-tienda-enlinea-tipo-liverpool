import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Acerca de nosotros</h3>
            <p className="text-sm">Somos una tienda en línea comprometida con ofrecer los mejores productos y servicios a nuestros clientes.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-300">Productos</a></li>
              <li><a href="#" className="hover:text-gray-300">Ofertas</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p className="text-sm">Email: info@mitienda.com</p>
            <p className="text-sm">Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Mi Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer