import React, { useMemo, useState } from 'react'
import { assets } from '../assets/assets'

const Product = () => {
  const product = {
    id: 'p-hero-1',
    title: 'کت بلیزر لینن زنانه',
    price: 890000,
    description:
      'بلوزر لینن سبک و خنک با دو جیب مخفی، مناسب استایل روزانه و رسمی. پارچه ضدچروک و آستر تنفس‌پذیر که در طول روز حس راحتی می‌دهد.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['کرم', 'مشکی', 'سبز دودویی'],
    images: [assets.p_img2_1, assets.p_img2_2, assets.p_img2_3, assets.p_img2_4],
    rating: 4.8,
    reviews: 126,
    tag: 'ارسال اکسپرس تهران',
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[1])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(product.images[0])

  const priceFormatted = useMemo(
    () => product.price.toLocaleString('fa-IR'),
    [product.price]
  )

  return (
    <div className="w-full text-gray-800" dir="rtl">
      {/* Product detail */}
      <section className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="relative rounded-[28px] overflow-hidden border border-white shadow-xl bg-gradient-to-l from-pink-50 via-white to-pink-100 p-4">
            <div className="absolute inset-0 bg-pink-200 blur-3xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden bg-white shadow">
              <img src={activeImage} alt={product.title} className="w-full h-[420px] object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`rounded-xl overflow-hidden border transition transform hover:-translate-y-0.5 ${
                  activeImage === img ? 'border-pink-500 shadow-lg' : 'border-gray-100 shadow-sm'
                }`}
              >
                <img src={img} alt={`${product.title}-${idx}`} className="w-full h-24 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-xs text-pink-600 bg-pink-50 border border-pink-100 rounded-full px-3 py-1">
                {product.tag}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{product.title}</h1>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{product.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">امتیاز</p>
              <p className="text-lg font-semibold text-gray-900">{product.rating} ★</p>
              <p className="text-xs text-gray-500 mt-1">{product.reviews} نظر</p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">قیمت</p>
              <p className="text-2xl font-bold text-gray-900">{priceFormatted} تومان</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-pink-600 font-semibold">ارسال رایگان سفارش‌های بالای ۱٫۵ میلیون</p>
              <p className="text-xs text-gray-500 mt-1">۷ روز ضمانت تعویض</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-700">سایز</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border text-sm font-semibold transition ${
                      selectedSize === size
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">رنگ</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl border text-sm font-semibold transition ${
                      selectedColor === color
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">تعداد</span>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="text-lg font-bold text-gray-700"
              >
                −
              </button>
              <span className="w-8 text-center text-gray-900 font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="text-lg font-bold text-gray-700"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-3 rounded-full bg-pink-600 text-white font-semibold hover:-translate-y-0.5 transition transform shadow-lg">
              افزودن به سبد خرید
            </button>
            <button className="flex-1 py-3 rounded-full border border-pink-200 text-pink-700 font-semibold hover:-translate-y-0.5 transition transform">
              خرید فوری
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">ارسال سریع</p>
              <p className="text-xs text-gray-600 mt-1">تهران: امروز / سایر شهرها: ۲-۴ روز</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">تعویض سایز</p>
              <p className="text-xs text-gray-600 mt-1">تا ۷ روز با پیک یا پست امکان‌پذیر است.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">پشتیبانی</p>
              <p className="text-xs text-gray-600 mt-1">چت آنلاین و تماس تلفنی در ساعات کاری.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mt-14 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm text-pink-600 font-semibold tracking-[0.2em]">جزئیات محصول</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">چرا این کت محبوب است؟</h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 md:max-w-xl">
            ترکیب پارچه لینن با دوخت تمیز و فرم نیمه‌فیت باعث شده این مدل هم برای محیط کار و هم استایل روزمره مناسب باشد.
            لبه‌های دوبل و دکمه‌های مخفی حس مینیمال و لوکس را تقویت می‌کند.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: 'پارچه لینن تنفسی', desc: 'پوشیدن طولانی‌مدت بدون احساس گرما یا تعریق.' },
            { title: 'دوخت تمیز و بادوام', desc: 'لبه‌های تقویت‌شده و آستر نرم برای ماندگاری بیشتر.' },
            { title: 'فرم نیمه‌فیت', desc: 'استایل شیک روی شلوار رسمی یا جین، بدون آزادی یا تنگی آزاردهنده.' },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-pink-600 font-semibold mb-1">•</p>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Suggested products */}
      <section className="mt-14 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">محصولات مرتبط</h3>
          <span className="text-sm text-pink-600 font-semibold">برای ست کردن امتحان کنید</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'شلوار پارچه‌ای کرم', price: 640000, image: assets.p_img3 },
            { title: 'تاپ نخی سفید', price: 210000, image: assets.p_img1 },
            { title: 'کتانی سفید کلاسیک', price: 980000, image: assets.p_img11 },
            { title: 'اکسسوری مینیمال نقره‌ای', price: 320000, image: assets.p_img12 },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:-translate-y-1 transition-transform duration-200">
              <div className="h-44 bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 mb-1">{item.title}</p>
                <p className="text-base font-semibold text-gray-900">{item.price.toLocaleString('fa-IR')} تومان</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product
