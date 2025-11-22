import React from 'react'
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

const Collection = () => {
  return (
    <div>
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
    </div>
  )
}

export default Collection
