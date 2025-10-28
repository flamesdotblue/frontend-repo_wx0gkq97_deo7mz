import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const NavLink = ({ children, href }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 text-white">
              <ShoppingBag size={18} />
            </span>
            <span className="text-base sm:text-lg font-semibold tracking-tight">Bag o Bags</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#cart"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              <ShoppingBag size={16} />
              <span>Cart</span>
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-slate-100"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <a href="#products" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">Products</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
