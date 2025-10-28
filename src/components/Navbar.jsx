import { ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600 text-white shadow-lg shadow-rose-500/20">
            <ShoppingBag size={20} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Bag o Bags</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#collections" className="text-gray-700 hover:text-gray-900 transition">Collections</a>
          <a href="#featured" className="text-gray-700 hover:text-gray-900 transition">Featured</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition">About</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900 transition">
            <ShoppingBag size={16} />
            Shop now
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-black/5" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            <a href="#collections" className="py-2">Collections</a>
            <a href="#featured" className="py-2">Featured</a>
            <a href="#about" className="py-2">About</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
