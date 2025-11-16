import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-28 pb-24">
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/90 to-zinc-950" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Build the Future of Smart Nutrition.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-lg leading-relaxed text-zinc-300 max-w-xl"
            >
              Meal.ai is the enterprise-grade platform for AI-driven meal planning, nutrient analytics, and developer-ready APIs — all crafted for precision, scale, and control.
            </motion.p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#get-started" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors">Get Started</a>
              <a href="#docs" className="text-sm text-zinc-300 hover:text-white">Read the docs</a>
            </div>
          </div>

          {/* 3D Spline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/3] w-full rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden"
          >
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
