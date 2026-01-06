'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '@/lib/hooks';
import { setLoading } from '@/lib/store/authSlice';
import { verifyEmail, resendVerificationCode } from '@/lib/api/auth';
import { toast } from 'sonner';

export default function VerifyPage() {
  const t = useTranslations('auth.verify');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);
    dispatch(setLoading(true));

    try {
      const response = await verifyEmail(code);
      if (response.status) {
        toast.success(response.message || 'Verification successful!');
        setSuccess('Verification successful! Redirecting...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        toast.error(response.message || 'Verification failed');
        setError(response.message || 'Verification failed');
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Verification failed';
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
      dispatch(setLoading(false));
    }
  };

  const handleResend = async () => {
    setError('');
    setSuccess('');
    setIsResending(true);

    try {
      const response = await resendVerificationCode();
      if (response.status) {
        toast.success(response.message || 'Verification code resent successfully!');
        setSuccess('Verification code resent successfully!');
      } else {
        toast.error(response.message || 'Failed to resend code');
        setError(response.message || 'Failed to resend code');
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to resend code';
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
            {t('title')}
          </h1>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            {t('enterCode')}
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-400 rounded-lg text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('code')}
              </label>
              <input
                type="text"
                value={code}
                onChange={handleChange}
                required
                maxLength={6}
                placeholder="123456"
                className="w-full px-4 py-3 text-center text-2xl font-bold tracking-widest border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-card text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                Test code: 123456
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || code.length !== 6}
              className="w-full py-3 bg-primary dark:bg-black text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Verifying...' : t('submit')}
            </button>
          </form>

          <button
            onClick={handleResend}
            disabled={isResending}
            className="w-full mt-4 py-2 text-primary font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Sending...' : t('resend')}
          </button>
        </div>
      </div>
    </div>
  );
}

