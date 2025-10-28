import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
  return (
    <section id="problem" className="bg-white py-20 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          The Problem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 max-w-3xl text-base/relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg"
        >
          Caring for someone you love is hard — especially when you can’t be there all the time.
          Missed pills, skipped meals, or unnoticed changes can lead to emergencies. But constant
          check-ins or cameras feel intrusive. We believe care should respect independence.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
