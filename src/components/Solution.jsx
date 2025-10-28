import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bell, Lock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Blends into daily life',
    desc: 'Smart objects like pill boxes and containers that quietly monitor routines.'
  },
  {
    icon: Bell,
    title: 'Preventive alerts',
    desc: 'Signals early when something looks off — before it becomes an emergency.'
  },
  {
    icon: Smartphone,
    title: 'Connected, not invasive',
    desc: 'Securely links families and doctors through an app for gentle support.'
  },
  {
    icon: Lock,
    title: 'Privacy by design',
    desc: 'No cameras. Data is protected and shared only with the people you trust.'
  }
];

const Solution = () => {
  return (
    <section id="solution" className="bg-neutral-50 py-20 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          Our Solution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 max-w-3xl text-base/relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg"
        >
          Peace of mind for families. Independence for patients. Our system builds quiet bridges
          of care — where technology supports, not supervises.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-2 text-sky-700 transition group-hover:bg-sky-200 dark:bg-sky-900/30 dark:text-sky-300">
                  <f.icon size={22} />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
          Backed by Mirrorfolio Idea Labs, a deep-tech venture focused on human-centered innovation.
        </p>
      </div>
    </section>
  );
};

export default Solution;
