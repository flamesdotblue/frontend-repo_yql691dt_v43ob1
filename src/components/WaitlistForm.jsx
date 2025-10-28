import React, { useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Family', 'Doctor', 'Other'];

const WaitlistForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ name: '', email: '', role: roles[0] });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim()) {
      setError('Please enter your name and email.');
      return;
    }

    try {
      setSubmitting(true);
      // Simulate async request
      await new Promise((res) => setTimeout(res, 600));
      // Persist locally for now; backend can be wired later
      const entries = JSON.parse(localStorage.getItem('waitlist_entries') || '[]');
      entries.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem('waitlist_entries', JSON.stringify(entries));

      if (typeof onSuccess === 'function') onSuccess(form);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="bg-white py-20 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold sm:text-3xl"
        >
          Join the Waitlist
        </motion.h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          We’re opening early access soon. Join to get updates and reserve your spot.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none ring-sky-300/40 placeholder:text-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="Your name"
              required
              aria-required="true"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none ring-sky-300/40 placeholder:text-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="you@example.com"
              required
              aria-required="true"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="role" className="text-sm font-medium">Role</label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none ring-sky-300/40 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-900/20 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="mt-2 flex items-center justify-between gap-4">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              No spam, just updates that matter.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              {submitting ? 'Submitting…' : 'Join the Waitlist'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
