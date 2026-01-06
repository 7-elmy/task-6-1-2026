'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getUserData } from '@/lib/api/auth';
import { setCredentials, setLoading } from '@/lib/store/authSlice';

export function AuthInitializer() {
  const dispatch = useAppDispatch();
  const { token, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (storedToken && !isAuthenticated) {
        dispatch(setLoading(true));
        try {
          const response = await getUserData();
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
          }
        } catch (error) {
          // Token is invalid, remove it
          localStorage.removeItem('token');
        } finally {
          dispatch(setLoading(false));
        }
      }
    };

    initializeAuth();
  }, [dispatch, isAuthenticated]);

  return null;
}

