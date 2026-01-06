import { useState } from "react";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    title: "Red Rose Bouquet",
    category: "Flowers",
    image: "/images/product12.png",
    price: "$188",
  },
  {
    id: 2,
    title: "Sunflower Arrangement",
    category: "Flowers",
    image: "/images/product12.png",
    price: "$188",
  },
  {
    id: 3,
    title: "Mixed Flower Basket",
    category: "Flowers",
    image: "/images/product1.png",
    price: "$188",
  },
  {
    id: 4,
    title: "Tulip Bouquet",
    category: "Flowers",
    image: "/images/image 14.png",
    price: "$188",
  },
  {
    id: 5,
    title: "Mixed Flower Basket",
    category: "Flowers",
    image: "/images/product1.png",
    price: "$188",
  },
  {
    id: 6,
    title: "Lavender Bunch",
    category: "Flowers",
    image: "/images/product11.png",
    price: "$188",
  },
  {
    id: 7,
    title: "Peony Bouquet",
    category: "Flowers",
    image: "/images/image 10.png",
    price: "$188",
  },
  {
    id: 8,
    title: "Mixed Flower Basket",
    category: "Flowers",
    image: "/images/product1.png",
    price: "$188",
  },
];
export default function Tabsection() {
  const [activetab, setactivetab] = useState(0);
  return (
    <>
      <div className="tabs flex justify-between gap-6 pt-2 ">
        <div className="flex justify-between whitespace-nowrap gap-12 text-sm mx-auto  sm:gap-8 , text-md">
          <button
            className={activetab === 0 ? "active" : "notactive"}
            onClick={() => setactivetab(0)}
          >
            All Plants
          </button>
          <button
            className={activetab === 1 ? "active" : "notactive"}
            onClick={() => setactivetab(1)}
          >
            New Arrivals
          </button>
          <button
            className={activetab === 2 ? "active" : "notactive"}
            onClick={() => setactivetab(2)}
          >
            Sale
          </button>
        </div>
      
      </div>

      <div className=" w-full tabs-content text-center justify-center  mt-5">
        {activetab === 0 && (
          <div className="products grid gap-3 sm:gap-10 grid-cols-2 sm:grid-cols-3 ">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                
                <div className="flex product  flex-col">
                  <img
                    className="bg-[#FBFBFB]  cursor-pointer "
                    width={200}
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="details text-left cursor-pointer my-2">
                  
                    <h3 className="text-[#3D3D3D] text-sm whitespace-nowrap">
                      {product.title}
                    </h3>
                    <span className=" text-sm text-[#46A358]">
                      {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {activetab === 1 && (
          <p className="mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            doloribus architecto tempore! Nam repudiandae dolores nulla fuga,
            nemo praesentium, illum omnis saepe a alias eos laudantium
            cupiditate perspiciatis odio corporis.
          </p>
        )}
        {activetab === 2 && <p>new arrivals</p>}
      </div>
    </>
  );
}
