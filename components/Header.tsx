'use client';

import { useState, useRef, useEffect } from 'react';
import { Link, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import {
  ShoppingBag,
  Bell,
  Heart,
  Home,
  Grid3x3,
  Navigation,
  Mail,
  MessageCircle,
  ChevronDown,
  User,
  LogOut,
  LogIn,
} from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { logoutAction } from '@/lib/store/authSlice';
import { logout } from '@/lib/api/auth';

export function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch(logoutAction());
      setIsProfileMenuOpen(false);
      router.push('/auth/login');
    }
  };

  return (
    <header className="w-full bg-white dark:bg-black shadow-[0_0_52px_-24px_rgba(0,0,0,0.25)] sticky top-0 z-50">
      <div className="h-[91px] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[120px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dab958851423216af6f7b0e062d8d1dec7f36a3f?width=132"
            alt="TinyTemplates Logo"
            className="w-[66px] h-[51px]"
          />
        </Link>

        {/* Navigation - Hidden on mobile, shown on desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            <Home className="w-[19px] h-[19px]" />
            <span className="text-sm font-normal">{t('nav.home')}</span>
          </Link>
          <Link
            href="/category"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            <Grid3x3 className="w-5 h-5" />
            <span className="text-sm font-normal">{t('nav.category')}</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            <Navigation className="w-5 h-5" />
            <span className="text-sm font-normal">{t('nav.about')}</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-normal">{t('nav.contact')}</span>
          </Link>
          <Link
            href="/faq"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-normal">{t('nav.faq')}</span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            aria-label={t('actions.cart')}
          >
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            aria-label={t('actions.notifications')}
          >
            <Bell className="w-6 h-6" />
          </button>
          <button 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            aria-label={t('actions.favorites')}
          >
            <Heart className="w-6 h-6" />
          </button>

          {/* Language Toggle - Compact version */}
          <div className="">
            <LanguageToggle />
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label={t('actions.profile')}
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
              <ChevronDown
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${
                  isProfileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className={`absolute top-full mt-2 w-48 sm:w-48 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 ${
                locale === 'ar' 
                  ? 'left-0 sm:-left-10' 
                  : 'right-0 sm:-right-10'
              }`}>
                {isAuthenticated ? (
                  <>
                    <div className="px-3 sm:px-4 py-2 border-b border-border dark:border-gray-700">
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {user?.name || 'User'}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user?.email}
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-background dark:hover:bg-gray-700 transition-colors"
                    >
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/auth/login"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <LogIn className="w-3 h-3 sm:w-4 sm:h-4" />
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

