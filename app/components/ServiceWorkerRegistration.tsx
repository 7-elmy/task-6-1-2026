'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // تجاهل أخطاء chrome-extension في console
    const originalError = console.error;
    console.error = (...args: any[]) => {
      const message = args.join(' ');
      if (
        message.includes('chrome-extension') ||
        message.includes("Request scheme 'chrome-extension' is unsupported") ||
        message.includes('Failed to execute') ||
        message.includes("'put' on 'Cache'")
      ) {
        return; // تجاهل الخطأ
      }
      originalError.apply(console, args);
    };

    // تسجيل Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered successfully');
        })
        .catch((error) => {
          // تجاهل أخطاء التسجيل المتعلقة بـ chrome-extension
          if (!error.message?.includes('chrome-extension')) {
            console.error('Service Worker registration failed:', error);
          }
        });

      // معالجة الأخطاء غير المعالجة
      window.addEventListener('error', (event) => {
        if (
          event.message?.includes('chrome-extension') ||
          event.message?.includes("Request scheme 'chrome-extension' is unsupported")
        ) {
          event.preventDefault();
          return false;
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason;
        if (
          reason?.message?.includes('chrome-extension') ||
          reason?.message?.includes("Request scheme 'chrome-extension' is unsupported") ||
          reason?.message?.includes("'put' on 'Cache'")
        ) {
          event.preventDefault();
          return false;
        }
      });
    }

    // تنظيف عند unmount
    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}

