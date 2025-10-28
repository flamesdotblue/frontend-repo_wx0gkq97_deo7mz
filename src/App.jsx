import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
