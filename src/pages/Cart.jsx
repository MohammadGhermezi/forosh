import React, { useMemo, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "کت بلیزر لینن زنانه",
      price: 890000,
      size: "M",
      color: "کرم",
      qty: 1,
      image: "/images/p_img2_1.png",
    },
    {
      id: 2,
      title: "کتانی رانینگ آلومینیوم",
      price: 1250000,
      size: "41",
      color: "آبی",
      qty: 2,
      image: "/images/air-jordan-1-low-womens-aluminum-dc0774-141-1.jpg",
    },
    {
      id: 3,
      title: "اکسسوری استیل مینیمال",
      price: 320000,
      size: "فری",
      color: "نقره‌ای",
      qty: 1,
      image: "/images/accessory2.jpg",
    },
  ]);

  const handleQtyChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const { subtotal, shipping, discount, total } = useMemo(() => {
    const sub = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const ship = sub > 1500000 || cartItems.length === 0 ? 0 : 45000;
    const disc = Math.round(sub * 0.05);
    return { subtotal: sub, shipping: ship, discount: disc, total: sub + ship - disc };
  }, [cartItems]);

  return (
    <div className="w-full text-gray-800" dir="rtl">
      {/* Cart items + summary */}
      <section className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">سبد خرید</h1>
            <span className="text-sm text-gray-500">
              {cartItems.length} محصول
            </span>
          </div>
          {cartItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-pink-200 bg-pink-50 text-pink-700 p-6 text-center">
              سبد خرید خالی است. به کالکشن‌ها سر بزنید و آیتم‌های جدید اضافه کنید.
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-full sm:w-28 h-36 rounded-xl overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        سایز: {item.size} • رنگ: {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-pink-600 text-sm font-semibold hover:text-pink-700"
                    >
                      حذف
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">تعداد</span>
                      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                        <button
                          onClick={() => handleQtyChange(item.id, -1)}
                          className="text-lg font-bold text-gray-700"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-gray-900">{item.qty}</span>
                        <button
                          onClick={() => handleQtyChange(item.id, 1)}
                          className="text-lg font-bold text-gray-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-gray-500">قیمت واحد</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {item.price.toLocaleString("fa-IR")} تومان
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">خلاصه سفارش</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span>جمع جزء</span>
                <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
              </div>
              <div className="flex items-center justify-between">
                <span>هزینه ارسال</span>
                <span>{shipping === 0 ? "رایگان" : `${shipping.toLocaleString("fa-IR")} تومان`}</span>
              </div>
              <div className="flex items-center justify-between text-pink-600 font-semibold">
                <span>تخفیف ویژه</span>
                <span>- {discount.toLocaleString("fa-IR")} تومان</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-base font-bold text-gray-900">
                <span>مبلغ قابل پرداخت</span>
                <span>{total.toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>
            <button
              className="w-full mt-6 py-3 rounded-full bg-pink-600 text-white font-semibold hover:-translate-y-0.5 transition transform shadow-lg disabled:opacity-60"
              disabled={cartItems.length === 0}
            >
              ادامه به پرداخت
            </button>
            <p className="text-xs text-gray-500 mt-3">تسویه امن با درگاه‌های معتبر و امکان مرجوعی تا ۷ روز پس از تحویل.</p>
          </div>

          <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-400 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-2">ارسال سریع و مطمئن</h3>
            <p className="text-sm text-white/90 leading-relaxed mb-3">
              در تهران ارسال اکسپرس و در سایر شهرها تحویل زمان‌بندی‌شده داریم. اگر نیاز به تغییر آدرس دارید قبل از پرداخت اقدام کنید.
            </p>
            <button className="bg-white text-pink-700 font-semibold px-5 py-2 rounded-full hover:-translate-y-0.5 transition">
              قوانین و پشتیبانی
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
