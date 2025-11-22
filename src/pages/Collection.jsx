import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ProductCard from './Cart'



const Collection = () => {
  const [filter, setFilter] = useState("همه");

  // داده نمونه محصولات
  const products = [
    { id: 1, title: "تیشرت مردانه", price: 120000, category: "مردانه", image: "/images/p_img2_1.png" },
    { id: 2, title: "پیراهن زنانه", price: 250000, category: "زنانه", image: "/images/Manteau-long.jpg" },
    { id: 3, title: "کفش اسپرت", price: 450000, category: "کفش", image: "/images/air-jordan-1-low-womens-aluminum-dc0774-141-1.jpg" },
    { id: 4, title: "گردنبند", price: 80000, category: "اکسسوری", image: "/images/accessory2.jpg" },
    { id: 5, title: "شلوار مردانه", price: 180000, category: "مردانه", image: "/images/p_img2_1.png" },
    { id: 6, title: "کفش زنانه", price: 400000, category: "کفش", image: "/images/air-jordan-1-low-womens-aluminum-dc0774-141-1.jpg" },
  ];

  const filteredProducts = filter === "همه"
    ? products
    : products.filter(p => p.category === filter);

  const categories = ["همه", "مردانه", "زنانه", "کفش", "اکسسوری"];

  return (
    <div className="w-full px-2 md:px-8 lg:px-16" dir="rtl">
      <Helmet>
        <title>فروشگاه - محصولات</title>
        <meta name="description" content="همه محصولات فروشگاه شامل پوشاک مردانه، زنانه، کفش و اکسسوری" />
      </Helmet>

      <h1 className="text-4xl font-bold my-8 text-gray-900">محصولات</h1>

      {/* دسته‌بندی‌ها */}
      <div className="flex gap-4 flex-wrap mb-8">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full font-semibold border ${
              filter === cat ? "bg-pink-500 text-white border-pink-500" : "bg-white text-gray-700 border-gray-300"
            } transition`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* محصولات */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(p => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              category={p.category}
              image={p.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mt-8">هیچ محصولی برای این دسته‌بندی یافت نشد.</p>
      )}
    </div>
  );
};

export default Collection;
