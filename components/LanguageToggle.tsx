'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group flex h-10 items-center justify-center gap-1 rounded-full border border-border bg-background px-2 sm:px-3 transition-colors hover:bg-accent hover:text-white"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
      <span className="text-xs font-medium hidden sm:inline group-hover:text-white transition-colors">{locale.toUpperCase()}</span>
    </button>
  );
}

