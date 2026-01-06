'use client';

import { useEffect } from 'react';
import { useRouter } from '@/i18n/routing';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/products');
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Redirecting to products...</p>
        </div>
      </main>
    </div>
  );
}
