import { motion } from 'framer-motion'

function Cards() {
  const cards = [
    { title: 'Nutrition Insights', desc: 'Surface daily and weekly trends to keep users aligned with goals.' },
    { title: 'Meal Analytics', desc: 'Track meal performance and adherence across time.' },
    { title: 'Caloric Breakdown', desc: 'Visualize total energy intake with clarity.' },
    { title: 'Macro Distribution', desc: 'Balance protein, carbs, and fats with precision.' },
  ]

  return (
    <section className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-white"
            >
              <h4 className="text-xl font-semibold tracking-tight">{c.title}</h4>
              <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
