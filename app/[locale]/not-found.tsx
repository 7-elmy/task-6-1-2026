'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md w-full">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">{t('title')}</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white dark:text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            {t('goToProducts')}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('goHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}

