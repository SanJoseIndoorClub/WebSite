import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Sports from './components/Sports';
import Events from './components/Events';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Facilities />
      <Sports />
      <Events />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;