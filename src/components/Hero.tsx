import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("src/assets/Portada-Indoor-Club.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-club-dark/60" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <img 
          src="src/assets/IndoorClub-Logo.png" 
          alt="San José Indoor Club Logo" 
          className="h-32 w-auto mb-8"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          San José Indoor Club
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Un club social y deportivo de Costa Rica
        </p>
        <a
          href="#membresia"
          className="bg-club-secondary hover:bg-club-secondary/90 text-club-dark px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Únete al Club
        </a>
        
        <div className="absolute bottom-8 animate-bounce text-club-secondary">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}