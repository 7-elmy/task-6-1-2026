import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";
import ReduxProvider from "@/components/providers/ReduxProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Header } from "@/components/Header";
import { AuthInitializer } from "@/components/AuthInitializer";
import { Toaster } from 'sonner';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <NextIntlClientProvider messages={messages}>
        <ReduxProvider>
          <ThemeProvider>
            <ServiceWorkerRegistration />
            <AuthInitializer />
            <Header />
            {children}
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </ReduxProvider>
      </NextIntlClientProvider>
    </div>
  );
}

