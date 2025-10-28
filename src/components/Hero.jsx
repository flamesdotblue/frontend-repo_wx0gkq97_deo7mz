import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0g6sOac26Qsr0o0t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Elevate your carry with
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-600"> Bag o Bags</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            Premium, durable, and irresistibly stylish bags designed for everyday adventures. Crafted with love, built to last.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#featured" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white font-medium shadow hover:scale-[1.02] active:scale-[0.98] transition">
              Explore collection
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black/10 bg-white text-gray-800 font-medium hover:bg-gray-50 transition">
              Why choose us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { label: 'Happy customers', value: '25k+' },
              { label: '5-star reviews', value: '4.8/5' },
              { label: 'Worldwide shipping', value: '70+ countries' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-4 bg-white/70 border border-black/5 shadow-sm">
                <div className="text-xl font-semibold">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
