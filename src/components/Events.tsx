export default function Events() {
  const events = [
    {
      title: "Torneo de Tenis",
      date: "15-17 Abril",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "Deportivo"
    },
    {
      title: "Cena de Gala",
      date: "30 Abril",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "Social"
    },
    {
      title: "Competencia de Natación",
      date: "7-8 Mayo",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "Deportivo"
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
                <button className="mt-4 text-club-primary hover:text-club-dark font-semibold transition-colors">
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}