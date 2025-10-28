import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Leaf } from 'lucide-react';

const perks = [
  {
    title: 'Built to last',
    desc: 'Premium materials and reinforced stitching for everyday durability.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast worldwide shipping',
    desc: 'Reliable delivery to 70+ countries with real-time tracking.',
    icon: Truck,
  },
  {
    title: 'Sustainably made',
    desc: 'Eco-conscious processes and vegan leather options you can feel good about.',
    icon: Leaf,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Crafted with intention</h2>
            <p className="mt-4 text-gray-600">Every Bag o Bags piece blends modern aesthetics with practical design. We obsess over details so your bag simply works and looks great doing it.</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {perks.map((p) => (
                <div key={p.title} className="rounded-xl p-4 border border-black/5 bg-white/70 backdrop-blur">
                  <p.icon className="text-rose-600" />
                  <div className="mt-3 font-medium">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1599766676305-6af85465b875?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmFmdGVkJTIwYmFnc3xlbnwwfDB8fHwxNzYxNjMxODg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Crafted bags" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
