import { useState } from 'react';
import Modal from './Modal';
import ImageModal from './ImageModal';

interface Event {
  title: string;
  date: string;
  image: string;
  category: string;
  description: string;
  time: string;
  location: string;
  price: string;
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);

  const events = [
    {
      title: "Noche Retro",
      date: "31 Mayo",
      image: "src/assets/events/Noche REtro.webp",
      category: "Social",
      description: "¡Vení a bailar con tus amigos al ritmo de los clásicos de los 70s, 80s y 90s! Ambiente retro, luces, DJ en vivo y mucha diversión.",
      time: "7:00 PM - 11:00 PM",
      location: "Restaurante: La Grill",
      price: "¢10.000 por persona. Incluye dos cocteles."
    },
    {
      title: "Basketball Shooting Challenge",
      date: "31 Mayo - 1 Junio",
      image: "src/assets/events/bskt shooting challenge.webp",
      category: "Deportivo",
      description: "Desafía tus habilidades en tiros de tres, velocidad y dribleo.",
      time: "A partir de las 9:30 AM",
      location: "Gimnasio Multiuso",
      price: "N/A"
    },
    {
      title: "Clase de Spinning",
      date: "Todas las semanas",
      image: "src/assets/events/Clase Spinning.webp",
      category: "Deportivo",
      description: "Bastantes bicicletas sincronizadas en una sola clase grupal. Música, energía y cardio al máximo nivel. ¡Reservá tu espacio!",
      time: "8:10 AM a 9:10 AM",
      location: "Salón de clases de Biomecánico",
      price: "¢3.400 por persona. Reserve desde la APP."
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-club-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-club-dark mb-4">
            Próximos Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No te pierdas nuestros eventos exclusivos para socios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-club-secondary text-club-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-club-primary font-semibold mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold text-club-dark mb-2">
                  {event.title}
                </h3>
                <button 
                  onClick={() => setSelectedEvent(event)}
                  className="mt-4 text-club-primary hover:text-club-dark font-semibold transition-colors"
                >
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)}
      >
        {selectedEvent && (
          <div className="space-y-6">
            <div 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setShowImageModal(true)}
            >
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-black/50 px-4 py-2 rounded-lg text-white text-sm">
                  Click para ampliar
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-club-secondary text-club-dark">
                  {selectedEvent.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-club-dark">
                {selectedEvent.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700">Fecha</p>
                  <p>{selectedEvent.date}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Hora</p>
                  <p>{selectedEvent.time}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Ubicación</p>
                  <p>{selectedEvent.location}</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700">Descripción</p>
                <p className="text-gray-600">{selectedEvent.description}</p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-700">Precio</p>
                  <p className="text-club-primary font-bold">{selectedEvent.price}</p>
                </div>
                {/*<button className="bg-club-primary hover:bg-club-dark text-white px-6 py-2 rounded-lg transition-colors">
                  Inscribirse
                </button>*/}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {selectedEvent && (
        <ImageModal
          isOpen={showImageModal}
          onClose={() => setShowImageModal(false)}
          imageUrl={selectedEvent.image}
          imageAlt={selectedEvent.title}
        />
      )}

    </section>
  );
}