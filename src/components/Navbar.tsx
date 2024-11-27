import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img 
                src="src/assets/IndoorClub-Logo.png" 
                alt="San José Indoor Club Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-club-dark hover:text-club-primary">Inicio</a>
            <a href="#instalaciones" className="text-club-dark hover:text-club-primary">Instalaciones</a>
            <a href="#deportes" className="text-club-dark hover:text-club-primary">Deportes</a>
            <a href="#eventos" className="text-club-dark hover:text-club-primary">Eventos</a>
            <a href="#app" className="text-club-dark hover:text-club-primary">Aplicación</a>
            <a href="#membresia" className="text-club-dark hover:text-club-primary">Membresía</a>
            <a href="#contacto" className="text-club-dark hover:text-club-primary">Contacto</a>

            {/*<a 
              href="https://appindoor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-club-secondary text-club-dark rounded-lg font-semibold hover:bg-club-secondary/90 transition-colors"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              App Móvil
            </a>*/}

          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-club-dark hover:text-club-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#inicio" className="block px-3 py-2 text-club-dark hover:text-club-primary">Inicio</a>
            <a href="#instalaciones" className="block px-3 py-2 text-club-dark hover:text-club-primary">Instalaciones</a>
            <a href="#deportes" className="block px-3 py-2 text-club-dark hover:text-club-primary">Deportes</a>
            <a href="#eventos" className="block px-3 py-2 text-club-dark hover:text-club-primary">Eventos</a>
            <a href="#app" className="block px-3 py-2 text-club-dark hover:text-club-primary">Aplicación</a>
            <a href="#membresia" className="block px-3 py-2 text-club-dark hover:text-club-primary">Membresía</a>
            <a href="#contacto" className="block px-3 py-2 text-club-dark hover:text-club-primary">Contacto</a>

            {/*<a 
              href="https://appindoor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-club-dark hover:text-club-primary"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              App Móvil
            </a>*/}

          </div>
        </div>
      )}
    </nav>
  );
}