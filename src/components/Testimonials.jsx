import { motion } from 'framer-motion'

function Testimonials() {
  const quotes = [
    {
      q: 'Meal.ai has transformed how our clients eat — insights are instant, plans are effortless.',
      a: 'Director of Nutrition, Fortune 500 Wellness'
    },
    {
      q: 'The API-first approach let us integrate advanced meal planning in days, not months.',
      a: 'VP Engineering, HealthTech Platform'
    },
    {
      q: 'Accurate, scalable, and elegant. Exactly what we needed for enterprise rollout.',
      a: 'Head of Product, Digital Health'
    }
  ]

  return (
    <section className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <p className="text-white text-lg leading-relaxed">“{t.q}”</p>
              <p className="mt-4 text-sm text-zinc-400">{t.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
