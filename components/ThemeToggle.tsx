'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('common');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
      aria-label={t('theme')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-primary hover:text-white" />
      ) : (
        <Moon className="h-5 w-5 text-primary hover:text-white" />
      )}
    </button>
  );
}

