export default function Sports() {
    const sports = [
      {
        name: "Tenis",
        description: "Clases individuales y grupales para todos los niveles",
        icon: "🎾"
      },
      {
        name: "Natación",
        description: "Programas de entrenamiento y clases de natación",
        icon: "🏊"
      },
      {
        name: "Racquetball",
        description: "Clases de entrenamiento para mejorar tu nivel en el deporte",
        icon: "🥍"
      },
      {
        name: "Gimnasio",
        description: "Entrenamiento personalizado y clases grupales",
        icon: "💪"
      },
      {
        name: "Fútbol",
        description: "Cancha de fútbol con césped artificial",
        icon: "⚽"
      },
      {
        name: "Baloncesto",
        description: "Cancha techada con iluminación profesional",
        icon: "🏀"
      },
      {
        name: "Clases grupales",
        description: "Clases de yoga, baile entre otras",
        icon: "🧘‍♀️"
      }
    ];
  
    return (
      <section id="deportes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Actividades Deportivas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre todas las actividades deportivas que tenemos para ti y tu familia
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport) => (
              <div key={sport.name} className="bg-gray-50 rounded-xl p-8 hover:bg-emerald-50 transition-colors">
                <div className="text-4xl mb-4">{sport.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {sport.name}
                </h3>
                <p className="text-gray-600">
                  {sport.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }