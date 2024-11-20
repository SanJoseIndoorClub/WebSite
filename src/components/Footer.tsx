import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">San José Indoor Club</h3>
            <p className="text-gray-400 mb-4">
              El club social y deportivo más exclusivo de Costa Rica, donde la excelencia y el confort se unen para brindarte la mejor experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#instalaciones" className="text-gray-400 hover:text-white">Instalaciones</a></li>
              <li><a href="#deportes" className="text-gray-400 hover:text-white">Deportes</a></li>
              <li><a href="#eventos" className="text-gray-400 hover:text-white">Eventos</a></li>
              <li><a href="#membresia" className="text-gray-400 hover:text-white">Membresía</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Sábados: 5:00 AM - 10:00 PM</li>
              <li>Domingos: 5:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} San José Indoor Club. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}