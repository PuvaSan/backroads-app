import Navbar from './components/Navbars.js';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import TestComponent from './components/TestComponent.tsx';

function App() {
  return (
    <>
    <TestComponent message="Hello from TestComponent"/>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
    </>
  );
}

export default App;
