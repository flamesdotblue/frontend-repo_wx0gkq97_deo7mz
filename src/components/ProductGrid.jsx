import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Urban Explorer Backpack',
    price: 89,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1520975922296-1c0fd125dcbf?q=80&w=1400&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Classic Leather Tote',
    price: 129,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1612392062386-c7426f0cb0fd?q=80&w=1400&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Everyday Crossbody',
    price: 59,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop',
    tag: 'Trending',
  },
  {
    id: 4,
    name: 'Weekender Duffel Pro',
    price: 149,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1400&auto=format&fit=crop',
    tag: 'Limited',
  },
];

export default function ProductGrid() {
  return (
    <section id="featured" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured collection</h2>
            <p className="text-gray-600 mt-2">Handpicked styles loved by our community</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-rose-600 hover:text-rose-700">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-black/5 bg-white/70 backdrop-blur shadow-sm hover:shadow-lg transition"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/80 text-white">
                  {p.tag}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-gray-900 leading-tight">{p.name}</h3>
                  <div className="text-gray-900 font-semibold">${p.price}</div>
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill={idx < Math.round(p.rating) ? 'currentColor' : 'none'} className="stroke-amber-500" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{p.rating}</span>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900 transition">
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
