'use client';

import { Link } from '@/i18n/routing';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ProductsPage() {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const products = [
    {
      id: 1,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/1557f693799f480a8bc262580367433e3fe912b0?width=395',
      category: 'Dresses',
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
      price: 'AED 900',
      originalPrice: 'AED 1300',
      discount: '25% OFF',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      id: 2,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ef7e6e790b1d7ca28b1b3fc3ff35b98317a19c46?width=395',
      category: 'Dresses',
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      id: 3,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/6bd4606956b760f41ed1dcc56d3476e32212e434?width=395',
      category: 'Dresses',
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Red",
      price: 'AED 900',
      originalPrice: 'AED 1300',
      discount: '25% OFF',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
    {
      id: 4,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/10e531eb60bfc434e37a986413008e78a754bcfe?width=395',
      category: 'Dresses',
      title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Green",
      price: 'AED 900',
      rating: 4.5,
      reviews: 2910,
      colors: 3,
    },
  ];

  const toggleLike = (id: number) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE] dark:bg-black px-4 sm:px-8 md:px-16 lg:px-[120px] py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-3">
            <Link href={`/product/${product.id}`} className="block">
              <div className="relative h-[268px] rounded-[20px] border border-gray-200 dark:border-gray-700 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center p-[62px_45px_8px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[198px] h-[198px] object-cover"
                  />
                </div>

                {product.discount && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-[10px] font-semibold text-primary">{product.discount}</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                    className={`w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-800/30 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                      likedItems.has(product.id) ? 'opacity-100' : ''
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedItems.has(product.id)
                          ? 'fill-gray-900 dark:fill-white text-gray-900 dark:text-white'
                          : 'text-primary'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-xs font-medium text-gray-900 dark:text-white">
                      {product.rating}
                    </span>
                    <span className="text-[10px] font-normal text-gray-500 dark:text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                  {product.title}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 line-through">
                      {product.originalPrice}
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
                    +{product.colors - 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

