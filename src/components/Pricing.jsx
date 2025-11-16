import { motion } from 'framer-motion'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      desc: 'For evaluation and prototypes',
      features: ['100 plans/mo', 'Basic analytics', 'Community support'],
      glow: false,
    },
    {
      name: 'Pro',
      price: '$49',
      desc: 'For growing teams and products',
      features: ['10k plans/mo', 'Advanced analytics', 'Priority support'],
      glow: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For org-wide adoption',
      features: ['Unlimited', 'SLA & SSO', 'Dedicated solutions'],
      glow: false,
    },
  ]

  return (
    <section id="pricing" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl p-6 border ${p.glow ? 'border-white/20 bg-white/[0.06]' : 'border-white/10 bg-zinc-900/40'}`}
            >
              {p.glow && (
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-cyan-400/20 blur-xl" />
              )}
              <div className="relative">
                <h4 className="text-white text-2xl font-semibold tracking-tight">{p.name}</h4>
                <p className="mt-2 text-zinc-300">{p.desc}</p>
                <p className="mt-6 text-white text-4xl font-semibold">{p.price}<span className="text-base text-zinc-400 font-normal">/mo</span></p>
                <ul className="mt-6 space-y-2 text-zinc-300">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#get-started" className={`mt-8 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold ${p.glow ? 'text-black bg-cyan-400 hover:bg-cyan-300' : 'text-white border border-white/20 hover:border-white/40'}`}>Choose {p.name}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
