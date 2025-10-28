import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="mt-10 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {year} Bag o Bags. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#products" className="hover:text-slate-900">Products</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
