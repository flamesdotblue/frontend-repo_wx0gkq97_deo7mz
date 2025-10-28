import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Urban Daypack',
    price: 79,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1520975940478-6a2f2aa0f6e0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Weekend Duffle',
    price: 129,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Eco Tote',
    price: 39,
    rating: 4.4,
    img: 'https://images.unsplash.com/photo-1593032457868-4f8f6b3e3a6e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Travel Pro 40L',
    price: 169,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop',
  },
];

function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(value - 0.5));
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {stars.map((filled, i) => (
        <Star key={i} size={16} className={filled ? 'fill-amber-500' : ''} />
      ))}
      <span className="ml-1 text-xs text-slate-600">{value.toFixed(1)}</span>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div
      className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-600">${product.price}</p>
          </div>
          <Rating value={product.rating} />
        </div>
        <button
          className="mt-4 inline-flex items-center gap-2 w-full justify-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          onClick={() => alert(`Added ${product.name} to cart`)}
        >
          <ShoppingCart size={16} /> Add to cart
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Featured products</h2>
          <p className="mt-2 text-slate-600">Our most-loved picks from the Bag o Bags lineup.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
