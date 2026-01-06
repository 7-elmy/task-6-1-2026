// Service Worker - يتجاهل طلبات chrome-extension لمنع الأخطاء
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // تجاهل طلبات chrome-extension و chrome-extension://
  if (url.startsWith('chrome-extension://') || 
      url.startsWith('chrome://') ||
      url.startsWith('moz-extension://') ||
      url.startsWith('safari-extension://')) {
    return; // لا نتعامل مع هذه الطلبات
  }

  // تجاهل أي طلب ليس http أو https
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return;
  }

  // يمكنك إضافة منطق الكاش هنا إذا أردت
  // event.respondWith(...)
});

// معالجة الأخطاء لمنع ظهورها في console
self.addEventListener('error', (event) => {
  if (event.message && event.message.includes('chrome-extension')) {
    event.preventDefault();
    return false;
  }
});

self.addEventListener('unhandledrejection', (event) => {
  if (event.reason && 
      (event.reason.message?.includes('chrome-extension') ||
       event.reason.message?.includes("Request scheme 'chrome-extension' is unsupported"))) {
    event.preventDefault();
    return false;
  }
});

