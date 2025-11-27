import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ProductCard from '../components/ProductCard'
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import emptyAnimation from "/src/animations/Error 404.json";
import PriceRangeSlider from "../components/PriceRangeBar";

const Collection = () => {

  // داده نمونه محصولات
  const products = [
    { id: 1, title: "تیشرت مردانه", price: 120000, category: "مردانه", image: "/images/p_img2_1.png", sizes: ["M", "L"], colors: ["black", "white"], sale: false },
    { id: 2, title: "پیراهن زنانه", price: 250000, category: "زنانه", image: "/images/Manteau-long.jpg", sizes: ["S", "M"], colors: ["red"], sale: true },
    { id: 3, title: "کفش اسپرت", price: 450000, category: "کفش", image: "/images/air-jordan-1-low-womens-aluminum-dc0774-141-1.jpg", sizes: ["40", "41", "42"], colors: ["blue"], sale: false },
    { id: 4, title: "گردنبند", price: 80000, category: "اکسسوری", image: "/images/accessory2.jpg" ,sizes: ["M", "L"], colors: ["black", "white"], sale: false},
    { id: 5, title: "شلوار مردانه", price: 180000, category: "مردانه", image: "/images/p_img2_1.png" ,sizes: ["M", "L"], colors: ["black", "white"], sale: false},
    { id: 6, title: "کفش زنانه", price: 400000, category: "کفش", image: "/images/air-jordan-1-low-womens-aluminum-dc0774-141-1.jpg" ,sizes: ["M", "L"], colors: ["black", "white"], sale: false },
  ];

  // وضعیت فیلترها
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [saleOnly, setSaleOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500000]);

  const [bannerLoaded, setBannerLoaded] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "همه";
  const [filter, setFilter] = useState(selectedCategory);

  useEffect(() => {
    setFilter(selectedCategory);
  }, [selectedCategory]);

  const categories = ["همه", "مردانه", "زنانه", "کفش", "اکسسوری"];
  
  const categoryBanner = {
    "همه": "/images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg",
    "مردانه": "/images/mnz-ToLMORRb97Q-unsplash.jpg",
    "زنانه": "/images/pexels-lum3n-44775-167703.jpg",
    "کفش": "/images/joel-muniz-ZnSAwVMJ13Y-unsplash.jpg",
    "اکسسوری": "/images/yasara-hansani-p8BxOM6j_ec-unsplash.jpg",
  };

  // فیلتر کردن محصولات بر اساس تمام فیلترها
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = filter === "همه" || product.category === filter;
    const isSizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    const isColorMatch = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));
    const isSaleMatch = !saleOnly || product.sale;
    const isPriceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

    return isCategoryMatch && isSizeMatch && isColorMatch && isSaleMatch && isPriceMatch;
  });

  return (
    <div className="w-full px-2 md:px-8 lg:px-16" dir="rtl">
      <img
        src={categoryBanner[filter]}
        alt={filter}
        className="w-full h-48 md:h-100 object-cover rounded-2xl shadow-lg"
      />

      <h1 className="text-4xl font-bold my-8 text-gray-900">محصولات</h1>

      <div className="flex gap-4 flex-wrap mb-8">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-xl font-semibold border shadow-sm transition flex items-center gap-2 ${filter === cat ? "bg-pink-600 text-white shadow-md border-pink-700 scale-105" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                onClick={() => {
                  setBannerLoaded(false); // دوباره لودر بیاد برای عکس جدید
                  setFilter(cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

      
{/* فیلترها */}
<div className="w-full md:w-64 bg-gray-50 rounded-2xl shadow-lg p-4 border flex flex-col top-4 h-fit mb-10">

  {/* عنوان */}
  <h2 className="text-xl font-bold mb-4 text-gray-800">فیلترها</h2>

  {/* Accordion */}
  <div className="space-y-3">

    {/* سایز */}
    <details className="group border rounded-xl p-3 bg-white shadow-md">
      <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-700">
        سایز
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>

      <div className="mt-3 flex gap-2 flex-wrap">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            onClick={() =>
              setSelectedSizes((prev) =>
                prev.includes(size)
                  ? prev.filter((s) => s !== size)
                  : [...prev, size]
              )
            }
            className={`px-3 py-1 rounded-lg text-sm border 
              ${selectedSizes.includes(size)
                ? "bg-pink-600 text-white border-pink-700 shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </details>

    {/* رنگ */}
    <details className="group border rounded-xl p-3 bg-white shadow-md">
      <summary className="cursor-pointer flex justify-between font-semibold text-gray-700">
        رنگ
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>

      <div className="mt-3 flex gap-3 flex-wrap">
        {["black", "white", "red", "blue", "green"].map((color) => (
          <div
            key={color}
            onClick={() =>
              setSelectedColors((prev) =>
                prev.includes(color)
                  ? prev.filter((c) => c !== color)
                  : [...prev, color]
              )
            }
            className={`
              w-7 h-7 rounded-full cursor-pointer border-2 shadow 
              ${selectedColors.includes(color)
                ? "border-pink-600 scale-110"
                : "border-gray-400"}
            `}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </details>

    {/* حراج */}
    <details className="group border rounded-xl p-3 bg-white shadow-md">
      <summary className="cursor-pointer flex justify-between font-semibold text-gray-700">
        وضعیت تخفیف
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>

      <div className="mt-3 flex items-center gap-2">
        <input
          type="checkbox"
          checked={saleOnly}
          onChange={(e) => setSaleOnly(e.target.checked)}
          className="w-5 h-5 accent-pink-600"
        />
        <label className="text-gray-700">فقط محصولات حراجی</label>
      </div>
    </details>

    {/* قیمت */}
    <details className="group border rounded-xl p-3 bg-white shadow-md">
      <summary className="cursor-pointer flex justify-between font-semibold text-gray-700">
        قیمت
        <span className="transition group-open:rotate-180">⌄</span>
      </summary>

      <div className="mt-5" dir="ltr">
        <PriceRangeSlider
          min={0}
          max={1000000}
          onChange={(range) => setPriceRange(range)}
        />
        <p className="text-gray-600 text-center mt-2 text-sm">
          {priceRange[0].toLocaleString()} تومان - {priceRange[1].toLocaleString()} تومان
        </p>
      </div>
    </details>

  </div>

</div>



      {/* نمایش محصولات */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center text-center mt-16">
          <Lottie animationData={emptyAnimation} className="w-64 h-64" />
          <p className="text-gray-600 text-xl mt-4">
            محصولی در این دسته‌بندی پیدا نشد!
          </p>
        </div>
      )}
    </div>
  );
};

export default Collection;

