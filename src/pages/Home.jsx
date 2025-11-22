import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './Cart'

const products = [
  {
    id: 1,
    title: "تی‌شرت مردانه",
    price: 350000,
    category: "مردانه",
    image: "/images/product1.png"
  },
  {
    id: 2,
    title: "هودی زنانه",
    price: 620000,
    category: "زنانه",
    image: "/images/product2.png"
  },
  {
    id: 3,
    title: "کفش اسپرت",
    price: 780000,
    category: "کفش",
    image: "/images/product3.png"
  },
  {
    id: 4,
    title: "کت تک مردانه",
    price: 950000,
    category: "مردانه",
    image: "/images/product4.png"
  },
];

const Home = () => {
  return (
    
    <div className="w-full" dir="rtl">

      {/* ------------------ HERO SECTION ------------------ */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between mt-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            خرید بهترین لباس‌ها  
            <span className="text-pink-400"> با بهترین قیمت</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-md">
            جدیدترین مدل‌های پوشاک زنانه و مردانه را با بهترین کیفیت از فروشگاه ما خریداری کنید.
          </p>

          <Link
            to="/collection"
            className="inline-block mt-6 px-6 py-3 bg-pink-500 text-white rounded-full text-lg hover:bg-pink-600 transition"
          >
            مشاهده محصولات
          </Link>
        </div>

        <img
          src="/images/p_img11.png"
          alt="Fashion"
          className="w-64 md:w-96 mt-8 md:mt-0"
        />
      </div>

      {/* ------------------ CATEGORIES ------------------ */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-14 mb-6">
        دسته‌بندی‌ها
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "مردانه", img: "/images/p_img2_1.png" },
          { title: "زنانه", img: "/images/Manteau-long.jpg" },
          { title: "کفش", img: "/images/air-jordan-1-low-womens-aluminum-dc0774-141-1.jpg" },
          { title: "اکسسوری", img: "/images/accessory2.jpg" },
        ].map((cat, i) => (
          <Link
            key={i}
            to="/collection"
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={cat.img}
              className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold group-hover:bg-black/60 backdrop-blur-[2px]  transition">
              {cat.title}
            </div>
          </Link>
        ))}
      </div>

      {/* ------------------ POPULAR PRODUCTS ------------------ */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-6">
        محصولات محبوب
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            category={p.category}
            image={p.image}
          />
        ))}
      </div>


      {/* ------------------ BANNER ------------------ */}
      <div className="mt-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl text-white p-12 text-center shadow-xl">
      <h2 className="text-4xl font-bold">فروش ویژه زمستان ❄️</h2>
      <p className="mt-2 text-xl opacity-90">تا ۵۰٪ تخفیف روی محصولات منتخب</p>

      <Link
        to="/collection"
        className="inline-block mt-6 bg-white text-pink-600 px-8 py-3 rounded-full text-xl font-semibold hover:bg-gray-100 transition"
      >
        مشاهده تخفیف‌ها
      </Link>
      </div>

    </div>
  )
}

export default Home
