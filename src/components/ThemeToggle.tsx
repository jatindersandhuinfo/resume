'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'resume-theme';

type ThemeMode = 'light' | 'dark';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // localStorage can throw in strict privacy modes.
  }
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<ThemeMode>('dark');
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    try {
      const initial = getInitialTheme();
      setTheme(initial);
    } finally {
      setReady(true);
    }
  }, []);

  React.useEffect(() => {
    if (!ready) return;

    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures and keep in-memory theme toggle working.
    }
  }, [theme, ready]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-black/[0.04] text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-gold  dark:bg-white/[0.08] dark:text-gold-light lg:min-w-[124px] lg:gap-2 lg:px-4"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden lg:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
