'use client';

import { useEffect } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { logoutAction } from '@/lib/store/authSlice';
import { logout } from '@/lib/api/auth';

export default function DashboardPage() {
  const t = useTranslations('auth.dashboard');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, user, router]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch(logoutAction());
      router.push('/auth/login');
    }
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('welcome')}, {user.name}
            </h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              {t('logout')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-black rounded-lg">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h2>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{user.email}</p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-black rounded-lg">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h2>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                +{user.mobile_country_code} {user.mobile}
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-black rounded-lg">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Account Type
              </h2>
              <p className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                {user.type}
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-black rounded-lg">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Email Verified
              </h2>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {user.email_verified_at ? 'Yes' : 'No'}
              </p>
            </div>
          </div>

          {user.image && (
            <div className="mt-8 flex justify-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

