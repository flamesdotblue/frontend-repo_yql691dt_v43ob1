import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import WaitlistForm from './components/WaitlistForm.jsx';

function App() {
  const [success, setSuccess] = useState(false);

  // Handle direct navigation to success path
  useEffect(() => {
    if (window.location.pathname.endsWith('/waitlist-success')) {
      setSuccess(true);
    }
  }, []);

  const handleSuccess = () => {
    // push URL to mimic a success page within SPA
    try {
      window.history.pushState({}, '', '/waitlist-success');
    } catch (_) {
      // ignore
    }
    setSuccess(true);
    // focus the announcement for accessibility
    setTimeout(() => {
      const el = document.getElementById('success-announcement');
      el?.focus?.();
    }, 0);
  };

  const handleBackHome = () => {
    try {
      window.history.pushState({}, '', '/');
    } catch (_) {
      // ignore
    }
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {!success ? (
        <>
          <Hero onCTAClick={() => {
            const el = document.getElementById('waitlist');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }} />
          <Problem />
          <Solution />
          <WaitlistForm onSuccess={handleSuccess} />

          {/* Footer */}
          <footer className="border-t border-neutral-200 bg-neutral-50 py-10 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-100">Mirrorfolio Idea Labs Private Limited</p>
                <p className="mt-1">CIN: U70200KL2025PTC093099</p>
                <p className="mt-1">Kozhikode, Kerala, India</p>
                <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">© 2025 Mirrorfolio Idea Labs — All rights reserved.</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="underline-offset-4 hover:underline">LinkedIn</a>
                <a href="mailto:hello@mirrorfolio.com" className="underline-offset-4 hover:underline">Email</a>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-50 to-white px-6 py-20 dark:from-neutral-900 dark:to-neutral-950">
          <div
            id="success-announcement"
            tabIndex={-1}
            className="mx-auto max-w-xl rounded-2xl border border-green-200 bg-white p-8 text-center shadow-sm dark:border-green-900/40 dark:bg-neutral-950"
            role="status"
            aria-live="polite"
          >
            <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">You’re on the list ✨</h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Thanks for joining the waitlist. We’ll reach out with early access details soon.
            </p>
            <div className="mt-6">
              <button
                onClick={handleBackHome}
                className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
              >
                Back to home
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
