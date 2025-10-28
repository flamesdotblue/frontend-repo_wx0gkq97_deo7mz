import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;
