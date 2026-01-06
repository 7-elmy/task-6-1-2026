'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '@/lib/hooks';
import { setCredentials, setLoading } from '@/lib/store/authSlice';
import { login, LoginData } from '@/lib/api/auth';
import { Link } from '@/i18n/routing';
import { toast } from 'sonner';

export default function LoginPage() {
  const t = useTranslations('auth.login');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    dispatch(setLoading(true));

    try {
      const response = await login(formData);
      if (response.status && response.data.token) {
        dispatch(
          setCredentials({
            user: {
              id: response.data.id,
              type: response.data.type,
              name: response.data.name,
              email: response.data.email,
              mobile_country_code: response.data.mobile_country_code,
              mobile: response.data.mobile,
              image: response.data.image,
              email_verified_at: response.data.email_verified_at,
              token: response.data.token,
            },
            token: response.data.token,
          })
        );

        toast.success(response.message || 'Login successful!');

        // Check if email is verified
        if (response.data.email_verified_at) {
          router.push('/dashboard');
        } else {
          router.push('/auth/verify');
        }
      } else {
        toast.error(response.message || 'Login failed');
        setError(response.message || 'Login failed');
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Login failed';
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('password')}
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary dark:bg-black text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Loading...' : t('submit')}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            {t('noAccount')}{' '}
            <Link href="/auth/register" className="text-primary font-medium hover:underline">
              {t('register')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

