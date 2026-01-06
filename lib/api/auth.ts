const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tinytales.trendline.marketing/api';

export interface RegisterData {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
  type: 'restaurant' | 'client';
  fcm_token?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface VerifyData {
  code: string;
}

export interface AuthResponse {
  status: boolean;
  status_code: number;
  data: {
    id: number;
    type: string;
    name: string;
    email: string;
    mobile_country_code: string;
    mobile: string;
    image: string;
    email_verified_at: boolean | null;
    token: string;
    is_complete?: boolean;
    is_approved?: boolean;
    count_items_cart?: number;
  };
  message: string;
}

// Helper function to get token from localStorage
const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Helper function to get language
const getLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const locale = path.split('/')[1] || 'en';
    return locale === 'ar' ? 'ar' : 'en';
  }
  return 'en';
};

// Helper function to create FormData
const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined && data[key] !== null) {
      formData.append(key, data[key]);
    }
  });
  return formData;
};

// Register API
export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const formData = createFormData({
    ...data,
    fcm_token: data.fcm_token || 'test',
  });

  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }

  return response.json();
};

// Login API
export const login = async (data: LoginData): Promise<AuthResponse> => {
  const formData = createFormData(data);

  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
};

// Verify Email API
export const verifyEmail = async (code: string): Promise<AuthResponse> => {
  const token = getToken();
  const language = getLanguage();

  if (!token) {
    throw new Error('No token found');
  }

  const formData = createFormData({ code });

  const response = await fetch(`${BASE_URL}/auth/verify-email`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept-Language': language,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Verification failed');
  }

  return response.json();
};

// Resend Verification Code API
export const resendVerificationCode = async (): Promise<{ status: boolean; message: string }> => {
  const token = getToken();
  const language = getLanguage();

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch(`${BASE_URL}/auth/verify-email/resend-code`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept-Language': language,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to resend code');
  }

  return response.json();
};

// Get User Data API
export const getUserData = async (): Promise<AuthResponse> => {
  const token = getToken();
  const language = getLanguage();

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch(`${BASE_URL}/auth/user-data`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept-Language': language,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to get user data');
  }

  return response.json();
};

// Logout API
export const logout = async (): Promise<{ status: boolean; message: string }> => {
  const token = getToken();
  const language = getLanguage();

  // If no token, just return success to allow local logout
  if (!token) {
    return { status: true, message: 'Logged out locally' };
  }

  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Accept-Language': language,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      // Even if API fails, we should allow local logout
      const error = await response.json().catch(() => ({}));
      console.warn('Logout API error:', error.message || 'Logout failed');
      return { status: true, message: 'Logged out locally' };
    }

    return response.json();
  } catch (error) {
    // Network errors or other issues - still allow local logout
    console.warn('Logout error:', error);
    return { status: true, message: 'Logged out locally' };
  }
};

