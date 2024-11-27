export default function Facilities() {
    const facilities = [
      {
        title: "Piscinas",
        image: "src/assets/Piscina-Ext.jpg",
        description: "Piscinas semiolímpicas climatizadas"
      },
      {
        title: "Canchas de Tenis",
        image: "src/assets/Cancha-Tenis.jpg",
        description: "Canchas profesionales de tenis con iluminación"
      },
      {
        title: "Gimnasio",
        image: "src/assets/Biomecanico.jpeg",
        description: "Equipamiento para todo grupo muscular y entrenadores profesionales"
      },
      {
        title: "Restaurante La Grill",
        image: "src/assets/LaGrill.jpeg",
        description: "Gastronomía única en un ambiente exclusivo"
      },
      {
        title: "Racquetball",
        image: "src/assets/Racquetball.jpg",
        description: "Canchas de racquetball con estándares internacionales"
      },
      {
        title: "Cafetería",
        image: "src/assets/Cafetería.jpeg",
        description: "Espacio acogedor con opciones de bebidas y bocadillos"
      },
      {
        title: "Bar El Mirador",
        image: "src/assets/Mirador-Bar.jpeg",
        description: "Bar con vista panorámica para disfrutar de un ambiente relajado"
      },
      {
        title: "La Hectárea",
        image: "src/assets/Hectarea.jpg",
        description: "Zona al aire libre ideal para caminar, correr o respirar aire fresco"
      },
      {
        title: "Fútbol",
        image: "src/assets/Futbol.jpg",
        description: "Cancha de fútbol con césped sintético y excelente iluminación"
      },
      {
        title: "Gimnasio Multiuso",
        image: "src/assets/Multiuso.jpg",
        description: "Cancha multiuso equipada para baloncesto y otras actividades deportivas"
      },
      {
        title: "Boliche",
        image: "src/assets/Boliche.jpg",
        description: "Pistas de boliche modernas para diversión en familia"
      }
    ];
  
    return (
      <section id="instalaciones" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Disfruta de instalaciones de primer nivel diseñadas para tu comodidad y entretenimiento
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <div key={facility.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }