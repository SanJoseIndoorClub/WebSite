import { Check } from 'lucide-react';

export default function Membership() {
  const benefits = [
    "Acceso ilimitado a todas las instalaciones",
    "Clases deportivas incluidas",
    "Acceso a eventos exclusivos",
    "Reservas prioritarias",
    "Descuentos en restaurante",
    "Invitados con tarifas especiales"
  ];

  return (
    <section id="membresia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-club-dark mb-4">
            Membresía
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a nuestra exclusiva comunidad y disfruta de beneficios únicos
          </p>
        </div>

        <div className="bg-gradient-to-br from-club-primary to-club-dark rounded-3xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Beneficios de ser socio
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <Check className="h-6 w-6 mr-3 flex-shrink-0 text-club-secondary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-wide mb-2">
                    Membresía Familiar
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    Consulta precios
                  </div>
                  <div className="text-sm opacity-80 mb-8">
                    Financiamiento disponible
                  </div>
                  <button className="w-full bg-club-secondary text-club-dark hover:bg-club-secondary/90 py-3 px-6 rounded-lg font-semibold transition-colors">
                    Solicitar información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}