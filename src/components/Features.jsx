import { motion } from 'framer-motion'
import { Cpu, ShoppingCart, BarChart3, ScanLine, Code2 } from 'lucide-react'

const features = [
  {
    title: 'AI Meal Planning Engine',
    icon: Cpu,
    body:
      'Generate hyper-personalized weekly plans with macros, constraints, and preferences — powered by our optimization core.',
  },
  {
    title: 'Smart Grocery List Generation',
    icon: ShoppingCart,
    body:
      'Translate plans into optimized shopping lists with substitutions, store-mapping, and dynamic quantities.',
  },
  {
    title: 'Nutrient Analysis Dashboard',
    icon: BarChart3,
    body:
      'Deep analytics across macros, micros, and patterns. Export insights or stream to your data warehouse.',
  },
  {
    title: 'Meal Scanning with Computer Vision (YOLOv8)',
    icon: ScanLine,
    body:
      'Instantly identify meals and estimate macros from a photo with our integrated CV pipeline.',
  },
  {
    title: 'API for Developers',
    icon: Code2,
    body:
      'A clean, versioned REST API and SDKs. Build on top of Meal.ai with enterprise reliability.',
  },
]

function FeatureRow({ title, body, Icon, reverse }) {
  return (
    <section className="border-t border-white/10">
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-zinc-300">
            <Icon className="h-4 w-4 text-cyan-400" />
            <span className="text-xs tracking-wide uppercase">Feature</span>
          </div>
          <h3 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-4 text-zinc-300 leading-relaxed">{body}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative w-full aspect-[16/10] rounded-xl border border-white/10 bg-zinc-900/40 overflow-hidden"
        >
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px p-px">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-zinc-900/60" />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <div className="bg-black text-white">
      {features.map((f, i) => (
        <FeatureRow key={f.title} title={f.title} body={f.body} Icon={f.icon} reverse={i % 2 === 1} />
      ))}
    </div>
  )
}

export default Features
