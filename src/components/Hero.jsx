import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

// Simple error boundary to prevent the entire app from crashing if the Spline scene fails to load
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Hero() {
  const [splineReady, setSplineReady] = useState(false);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* 3D Scene with graceful fallback */}
      <div className="absolute inset-0">
        <ErrorBoundary
          fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-sky-100" />
          }
        >
          <Spline
            scene="https://prod.spline.design/0g6sOac26Qsr0o0t/scene.splinecode"
            onLoad={() => setSplineReady(true)}
            style={{ width: '100%', height: '100%' }}
          />
        </ErrorBoundary>
      </div>

      {/* Subtle overlay to improve text contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bags for every journey
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-base md:text-lg text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover backpacks, totes, and travel gear crafted with style and sustainability.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
            >
              Shop bestsellers
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-medium transition"
            >
              Learn more
            </a>
          </motion.div>

          {!splineReady && (
            <p className="mt-3 text-sm text-slate-500">Loading interactive scene…</p>
          )}
        </div>
      </div>
    </section>
  );
}
