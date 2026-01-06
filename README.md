# TinyTales E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js 16, featuring multi-language support (Arabic & English), dark/light themes, and a complete authentication system.

## 🚀 Features

### Core Features
- **Multi-language Support**: Full internationalization with Arabic (RTL) and English (LTR) support using `next-intl`
- **Theme System**: Dark and light themes with custom color scheme using `next-themes`
- **Authentication Flow**: Complete authentication system with:
  - User Registration
  - Login
  - Email Verification
  - Protected Routes
  - User Dashboard
- **Product Management**:
  - Products listing page
  - Product details page with image slider
  - Similar products carousel with auto-play
- **State Management**: Redux Toolkit for global state management
- **UI Components**: Beautiful, responsive UI built with Tailwind CSS and shadcn/ui
- **Toast Notifications**: User-friendly notifications using Sonner

### Technical Features
- **Next.js 16** with App Router and Turbopack
- **TypeScript** for type safety
- **Responsive Design** for all screen sizes
- **Service Worker** for offline support and error handling
- **API Integration** with centralized configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Notifications**: Sonner
- **Icons**: Lucide React
- **Image Slider**: Swiper

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_BASE_URL=https://tinytales.trendline.marketing/api
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
task/
├── app/
│   ├── [locale]/              # Locale-based routing
│   │   ├── auth/              # Authentication pages
│   │   │   ├── register/      # Registration page
│   │   │   ├── login/         # Login page
│   │   │   └── verify/        # Email verification page
│   │   ├── dashboard/         # User dashboard
│   │   ├── products/          # Products listing
│   │   └── product/[id]/      # Product details
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Footer component
│   ├── ThemeToggle.tsx        # Theme switcher
│   ├── LanguageToggle.tsx     # Language switcher
│   └── providers/             # Context providers
├── lib/
│   ├── api/
│   │   └── auth.ts            # Authentication API calls
│   ├── store/
│   │   └── authSlice.ts       # Redux auth slice
│   ├── store.ts               # Redux store configuration
│   └── hooks.ts               # Typed Redux hooks
├── messages/
│   ├── en.json                # English translations
│   └── ar.json                # Arabic translations
├── i18n/
│   ├── routing.ts             # i18n routing configuration
│   └── request.ts             # i18n request configuration
└── public/                    # Static assets
```

## 🌐 API Configuration

The application uses environment variables for API configuration. Make sure to set up your `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://tinytales.trendline.marketing/api
```

All API endpoints are configured in `lib/api/auth.ts` and use the base URL from environment variables.

## 🎨 Customization

### Theme Colors
The primary color (`#BE968E`) is defined in `app/globals.css` and can be customized:

```css
:root {
  --primary: #BE968E;
}
```

### Adding New Languages
1. Add locale to `i18n/routing.ts`
2. Create translation file in `messages/[locale].json`
3. Update `generateStaticParams` in layout

## 🔐 Authentication Flow

1. **Register**: Users can create an account with email, password, phone, and account type
2. **Verify**: Email verification required after registration
3. **Login**: Users can login with email and password
4. **Dashboard**: Protected route accessible only after authentication
5. **Logout**: Secure logout with API call and local state cleanup

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_BASE_URL` | API base URL | Yes |

## 🎯 Key Features Implementation

### Image Slider
- Product images with thumbnail navigation
- Click on thumbnails to change main image
- Smooth transitions

### Protected Routes
- Automatic redirect to login for unauthenticated users
- Hydration-safe implementation
- Token-based authentication

### Toast Notifications
- Success notifications for successful operations
- Error notifications for failed operations
- Auto-dismiss with customizable duration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ using Next.js
