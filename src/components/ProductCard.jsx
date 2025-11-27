import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ id, title, price, category, image }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="group rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition bg-white"
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* INFO */}
      <div className="p-3">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="font-semibold mt-1 text-lg">{title}</h3>
        <p className="text-gray-800 mt-1 font-semibold">
          {price.toLocaleString()} تومان
        </p>

        {/* ADD TO CART BUTTON */}
        <button className="w-full mt-3 flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-xl hover:bg-black transition">
          <ShoppingBag size={18} />
          افزودن به سبد
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
