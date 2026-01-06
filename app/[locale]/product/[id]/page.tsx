'use client';

import { useState, use, useRef } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import {
  Star,
  ShoppingBag,
  Heart,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Footer } from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string; locale?: string }>;
}) {
  const { id } = use(params);
  const locale = useLocale();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('2xl');
  const productImages = [
    {
      main: 'https://api.builder.io/api/v1/image/assets/TEMP/0c92b47667c77e57a2d5269c3ffb747d089384f6?width=284',
      thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/0c92b47667c77e57a2d5269c3ffb747d089384f6?width=284',
    },
  
    {
      main: 'https://api.builder.io/api/v1/image/assets/TEMP/5585c7e098a5fa5bc4f97a3e5f23a6ab8f3d2a0f?width=284',
      thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/5585c7e098a5fa5bc4f97a3e5f23a6ab8f3d2a0f?width=284',
    },
    {
      main: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a57b44ad659c784f967b6bbdb7724173e26a39e?width=610',
      thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/7a57b44ad659c784f967b6bbdb7724173e26a39e?width=610',
    },
    {
      main: '/young-adult-man-wearing-hoodie-beanie 1.png',
      thumbnail: '/young-adult-man-wearing-hoodie-beanie 1.png',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations('product');

  const colors = [
    { name: 'red', value: '#D90202' },
    { name: 'blue', value: '#B8CCDA' },
    { name: 'gold', value: '#988755' },
    { name: 'light-blue', value: '#7198C8' },
    { name: 'dark-gray', value: '#5D5D5B' },
  ];

  const reviews = [
    {
      name: 'Alex Daewn',
      date: '4 months ago',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
    {
      name: 'Alex Daewn',
      date: '4 months ago',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
    {
      name: 'Alex Daewn',
      date: '4 months ago',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
    {
      name: 'Alex Daewn',
      date: '4 months ago',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
  ];

  const similarItems = [
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/1557f693799f480a8bc262580367433e3fe912b0?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/1557f693799f480a8bc262580367433e3fe912b0?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/1557f693799f480a8bc262580367433e3fe912b0?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/1557f693799f480a8bc262580367433e3fe912b0?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/ef7e6e790b1d7ca28b1b3fc3ff35b98317a19c46?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      originalPrice: 'AED 1300',
      discount: '25% OFF',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/6bd4606956b760f41ed1dcc56d3476e32212e434?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
      liked: true,
    },
    {
      image:
        'https://api.builder.io/api/v1/image/assets/TEMP/10e531eb60bfc434e37a986413008e78a754bcfe?width=395',
      category: 'Dresses',
      title:
        "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
      price: 'AED 900',
      originalPrice: 'AED 1300',
      discount: '25% OFF',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#FEFEFE] dark:bg-black">
      {/* Hero Section */}
      <div className="w-full h-[284px] bg-gray-100 dark:bg-black/70 relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/39d8cbb7e620cbb97a96796366318b4d8c5034ed?width=708"
          alt=""
          className="absolute left-0 right-0 top-0 h-full w-auto  object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="text-[80px] font-bold leading-normal opacity-5 stroke-black-500 dark:stroke-white"
            style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)' }}
          >
            {t('title')}
          </h1>
          <h2 className="text-[32px] font-semibold text-gray-900 dark:text-white -mt-16">
            {t('title')}
          </h2>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] mt-4">
        <div className="flex items-center gap-0.5 bg-[#ECECEC66] dark:bg-black dark:border-2 dark:border-white rounded-2xl px-4 sm:px-8 py-4 max-w-fit">
          <Link href="/" className="text-base font-medium text-gray-900 dark:text-white">
            {t('breadcrumb.home')}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-900 dark:text-white" />
          <Link href="/category" className="text-base font-medium text-gray-900 dark:text-white">
            {t('breadcrumb.category')}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-900 dark:text-white" />
          <span className="text-base font-medium text-gray-500 dark:text-gray-400">
            {t('breadcrumb.product')}
          </span>
        </div>
      </div>

      {/* Product Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col gap-2">
          <div className="relative w-full h-[565px] bg-gray-100 dark:bg-black rounded-3xl overflow-hidden">
            {/* Progress Indicators */}
            <div className="absolute top-4 left-4 right-4 flex items-center gap-1 z-10">
              <div className="h-1 flex-1 bg-gray-300 dark:bg-black rounded-2xl" />
              <div className="h-1 flex-1 bg-white dark:bg-gray-400 rounded-2xl" />
              <div className="h-1 flex-1 bg-gray-300 dark:bg-black rounded-2xl" />
              <div className="h-1 flex-1 bg-gray-300 dark:bg-black rounded-2xl" />
            </div>

            {/* Gradient Overlay Top */}
            <div className="absolute top-0 left-0 right-0 h-[73px] bg-gradient-to-b from-[#F4F4F4]/20 to-black/30" />

            {/* Product Image */}
            <img
              src={productImages[currentImageIndex].main}
              alt="Product"
              key={currentImageIndex}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[305px] h-[514px] object-cover transition-opacity duration-300"
            />

            
          </div>

          {/* Thumbnail Images */}
          <div className="flex items-center gap-2 overflow-y-hidden overflow-x-auto">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-[169px] h-[183px] rounded-3xl bg-gray-100 dark:bg-black flex items-center justify-center p-5 shrink-0 hover:scale-105 transition-all cursor-pointer ${
                  currentImageIndex === index ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                <img
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[120px] h-[120px] object-cover"
                />
              </button>
            ))}
            {productImages.length > 3 && (
              <div className="relative w-[169px] h-[183px] rounded-3xl bg-gray-100 dark:bg-gray-800 overflow-hidden shrink-0">
                <img
                  src={productImages[2].thumbnail}
                  alt="Thumbnail"
                  className="absolute left-3.5 top-5 w-[142px] h-[142px] object-cover"
                />
                <div className="absolute inset-0 bg-black/70 dark:bg-gray-900/70 flex items-center justify-center">
                  <span className="text-[32px] font-semibold text-white">
                    +{productImages.length - 3}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 relative">
          <div className='flex justify-between items-center'>
          {/* Category Badge */}
          <div className="inline-flex items-center self-start px-4 py-2 rounded-full border border-primary">
            <span className="text-sm font-semibold text-primary">{t('category')}</span>
          </div>
          {/* Icons */}
          <div className={`flex gap-2   `}>
            <button className="w-12 h-12 rounded-lg border border-gray-200 dark:border-black bg-white/30 dark:bg-black/30 backdrop-blur flex items-center justify-center hover:bg-primary/10 transition-colors">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </button>
            <button className="w-12 h-12 rounded-lg border border-gray-200 dark:border-black bg-white/30 dark:bg-black/30 backdrop-blur flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Heart className="w-8 h-8 text-primary" />
            </button>
          </div>

          </div>


          {/* Title */}
          <h1 className="text-2xl font-medium text-gray-900 dark:text-white leading-normal">
            {t('productTitle')}
          </h1>

          {/* Price */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium text-gray-900 dark:text-white">
                $300.00
              </span>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400 line-through">
                $360.00
              </span>
            </div>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              {t('priceNote')}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
            {t('description')}
          </p>

          <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />

          {/* Type Selector */}
          <div className="relative">
            <div className="w-full max-w-[299px] h-[45px] rounded-xl border border-gray-200 dark:border-black bg-white dark:bg-black px-5 py-3.5 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-900 dark:text-white">{t('type')}</span>
              <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white rotate-90" />
            </div>
            <span className="absolute -top-2 left-3 bg-white dark:bg-black px-2 text-xs font-normal text-gray-900 dark:text-white">
              {t('typeLabel')}
            </span>
          </div>

          {/* Size Selector */}
          <div className="relative">
            <div className="w-full max-w-[299px] h-[45px] rounded-xl border border-gray-200 dark:border-black bg-white dark:bg-black px-5 py-3.5 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-900 dark:text-white">2XL</span>
              <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white rotate-90" />
            </div>
            <span className="absolute -top-2 left-3 bg-white dark:bg-black px-2 text-xs font-normal text-gray-900 dark:text-white">
              {t('sizeLabel')}
            </span>
          </div>

          {/* Colors */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{t('colors')}</h3>
            <div className="flex items-center gap-4 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all ${
                    selectedColor === color.name
                      ? 'bg-gray-100 dark:bg-black border-2 border-gray-900 dark:border-white'
                      : 'bg-gray-50 dark:bg-black'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('selectedColor')}</span>
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">{t('quantity')}</h3>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                ($300.00 {t('perPiece')})
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-8 bg-gray-100 dark:bg-black rounded-xl p-2 w-[184px]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-gray-600 flex items-center justify-center disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
                <span className="text-2xl font-medium text-gray-700 dark:text-gray-300 w-6 text-center">
                  {String(quantity).padStart(2, '0')}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-gray-600 flex items-center justify-center"
                >
                  <Plus className="w-6 h-6 text-gray-900 dark:text-white" strokeWidth={2} />
                </button>
              </div>
              <span className="text-2xl font-medium text-gray-900 dark:text-white">
                $300.00
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full max-w-[234px] h-14 bg-primary rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-4">
            <span className="text-base font-medium text-white dark:text-black">
              {t('addToCart')}
            </span>
            <ShoppingBag className="w-6 h-6 text-white dark:text-black" />
          </button>
        </div>
      </div>

      {/* Rating & Reviews */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] mt-20">
        <div className="flex flex-col items- gap-0.5 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {t('ratingTitle')}
          </h2>
          <div className="w-1 h-10 bg-primary rounded-2xl -rotate-90 mx-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Rating Summary */}
          <div className="flex flex-col items-center gap-6 order-1 lg:order-1">
            <div className="flex items-end">
              <span className="text-[80px] md:text-[120px] font-medium text-gray-900 dark:text-white leading-none">
                4,5
              </span>
              <span className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-4 md:mb-6">
                /5
              </span>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="flex flex-col gap-2 order-2 lg:order-2">
            {[
              { stars: 5, percentage: 67 },
              { stars: 4, percentage: 15 },
              { stars: 3, percentage: 6 },
              { stars: 2, percentage: 3 },
              { stars: 1, percentage: 9 },
            ].map((rating) => (
              <div key={rating.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 md:w-6 md:h-6 fill-primary text-primary" />
                  <span className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 w-3">
                    {rating.stars}
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-5 flex-1">
                  <div className="relative h-1.5 flex-1 max-w-full lg:max-w-[363px] bg-gray-200 dark:bg-black rounded-xl">
                    <div
                      className="absolute left-0 top-0 h-full bg-primary rounded-xl"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 w-12 text-right">
                    %{rating.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total Reviews & Add Comment */}
          <div className="flex flex-col items-center gap-3.5 order-3 lg:order-3">
            <div className="flex flex-col items-center">
              <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                {t('totalReviews')}
              </span>
              <span className="text-[50px] md:text-[60px] font-semibold text-gray-900 dark:text-white">
                3.0K
              </span>
            </div>
            <button className="w-full max-w-[186px] h-14 bg-primary rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              <span className="text-base font-medium text-white dark:text-black">
                {t('addComment')}
              </span>
              <MessageCircle className="w-6 h-6 text-white dark:text-black" />
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-12 flex flex-col gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'fill-primary text-primary' : 'fill-primary/40 text-primary/40'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {review.date}
                  </span>
                </div>
                <p className="text-base font-normal text-gray-700 dark:text-gray-300">
                  {review.text}
                </p>
              </div>
              <div className="h-0.5 bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-4 bg-gray-100 dark:bg-gray-300 dark:text-black rounded-xl text-sm font-semibold text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {t('viewMoreComments')}
          </button>
        </div>
      </div>

      {/* Similar Items */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] mt-16 pb-16">
        <div className="flex flex-col gap-0.5 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {t('similarItems')}
          </h2>
          <div className="w-1 h-10 bg-primary rounded-2xl -rotate-90 mx-8" />
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            className="similar-items-swiper"
          >
            {similarItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3">
                  <div className="relative h-[268px] rounded-[20px] border border-gray-200 dark:border-gray-700 overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center p-[62px_45px_8px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[198px] h-[198px] object-cover"
                      />
                    </div>

                    {/* Discount Badge */}
                    {item.discount && (
                      <div className="absolute top-4 left-4 px-4 py-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="text-[10px] font-semibold text-primary">
                          {item.discount}
                        </span>
                      </div>
                    )}

                    {/* Action Icons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-800/30 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                      </button>
                      <button
                        className={`w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-800/30 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${item.liked ? 'opacity-100' : ''}`}
                      >
                        <Heart
                          className={`w-6 h-6 ${item.liked ? 'fill-gray-900 dark:fill-white text-gray-900 dark:text-white' : 'text-primary'}`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="text-xs font-medium text-gray-900 dark:text-white">
                            {item.rating}
                          </span>
                          <span className="text-[10px] font-normal text-gray-500 dark:text-gray-400">
                            ({item.reviews})
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full"
                            style={{
                              backgroundColor:
                                i === 0 ? '#BE968E' : i === 1 ? '#333' : '#E8E8E8',
                            }}
                          />
                        ))}
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          +{item.colors - 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="swiper-button-prev-custom w-[50px] h-[50px] rounded-full bg-blue-50 dark:bg-black dark:border-2 dark:border-white flex items-center justify-center hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="swiper-button-next-custom w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </ProtectedRoute>
  );
}

