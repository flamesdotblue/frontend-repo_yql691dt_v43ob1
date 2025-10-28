import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = ({ onCTAClick }) => {
  return (
    <section
      className="relative min-h-[88vh] w-full overflow-hidden bg-neutral-950 text-white"
      aria-label="Hero"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(56,189,248,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-28 pb-20 md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Care that protects — without getting in the way.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl text-base/relaxed text-neutral-200 sm:text-lg"
        >
          An intelligent system that helps families and doctors detect health risks
          before emergencies happen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 flex items-center gap-4"
        >
          <button
            onClick={onCTAClick}
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Join the Waitlist
          </button>
          <a
            href="#solution"
            className="text-sm text-neutral-200 underline-offset-4 hover:underline"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
