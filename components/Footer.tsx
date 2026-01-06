'use client';

import { Link } from '@/i18n/routing';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="w-full  relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Image for small screens */}
        <img
          src="/kids-photographysmallscreen.png"
          alt=""
          className="w-full h-full object-cover md:hidden"
        />
        {/* Image for medium and larger screens */}
        <img
          src="/kids-photography 1.png"
          alt=""
          className="hidden md:block w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 " />
      </div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-[120px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7f23ae4edd108bb849cdd4a655ccfd940f49068?width=132"
              alt="TinyTemplates Logo"
              className="w-[66px] h-[51px]"
            />
            <p className="text-sm font-medium text-white/70 leading-normal">
              {t('description')}
            </p>
          </div>

          {/* Let Us Help */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">{t('help.title')}</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/account"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('help.account')}
              </Link>
              <Link
                href="/faq"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('help.faq')}
              </Link>
              <Link
                href="/categories"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('help.categories')}
              </Link>
              <Link
                href="/products"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('help.products')}
              </Link>
            </nav>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">{t('policies.title')}</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/refund"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('policies.refund')}
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('policies.about')}
              </Link>
              <Link
                href="/cancellation"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('policies.cancellation')}
              </Link>
              <Link
                href="/terms"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('policies.terms')}
              </Link>
              <Link
                href="/privacy"
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t('policies.privacy')}
              </Link>
            </nav>
          </div>

          {/* Send Email */}
          <div className="flex flex-col gap-6">
            <h3 className={`text-3xl  font-bold text-white dark:text-black text-center md:text-left ${locale === 'ar' ? 'md:text-right' : ''}`}>
              {t('email.title')}
            </h3>
            <div className="flex items-center gap-0 bg-white rounded-2xl px-2">
              <input
                type="email"
                placeholder={t('email.placeholder')}
                className="flex-1 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900 bg-transparent outline-none placeholder:text-gray-500"
              />
              <button className="px-6 mx-2 md:px-8 lg:px-12 py-3 md:py-4 bg-primary text-white dark:text-black text-sm md:text-base font-semibold rounded-2xl hover:bg-primary/90 transition-colors whitespace-nowrap">
                {t('email.send')}
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-base font-semibold text-white">{t('social.title')}</h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors"
                  aria-label="Send"
                >
                  <Send className="w-6 h-6" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

