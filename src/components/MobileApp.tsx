import { Smartphone, QrCode, Calendar, Bell } from 'lucide-react';

export default function MobileApp() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Reservas en línea",
      description: "Reserva canchas y clases grupales desde tu móvil"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Notificaciones",
      description: "Recibe alertas de noticias importantes"
    },
    {
      icon: <QrCode className="h-6 w-6" />,
      title: "Acceso digital",
      description: "Usa tu número de socio para registrarte"
    }
  ];

  return (
    <section id="app" className="py-20 bg-gradient-to-br from-club-primary to-club-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Tu club en tu bolsillo
              </h2>
              <p className="text-xl text-gray-200">
                Descarga nuestra app móvil y disfruta de todas las funcionalidades del club desde cualquier lugar
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="bg-club-secondary p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=es.tpc.matchpoint.appclient.sanjoseindoorclub&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-club-dark px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-8"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/san-jose-club/id6450957346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-club-dark px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-8"
                  />
                </a>
              </div>
              <a
                href="https://sanjoseindoorclub-cr.matchpoint.com.es/Login.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-club-secondary text-club-dark px-6 py-3 rounded-lg font-semibold hover:bg-club-secondary/90 transition-colors"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Acceder a la app web
              </a>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] p-4 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl" />
              <div className="w-full h-full bg-club-primary rounded-[2.5rem] overflow-hidden">
                <img
                  src="src/assets/Reservas.png"
                  alt="App móvil San José Indoor Club"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}