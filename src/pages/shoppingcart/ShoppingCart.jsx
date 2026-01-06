import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "motion/react";
import { Pagination } from "swiper/modules";
import products from "../../components/productData/Productdata";
import { Heart, House, ShoppingCartIcon, Trash, UserRound } from "lucide-react";
import { useContext, useState } from "react";
import { ProductContext } from "../../components/productcontext/ProductContext";
import LoginModal from "../../components/loginmodal.jsx/LoginModal";

export default function ShoppingCart() {
  const context = useContext(ProductContext);
  const { cart } = useContext(ProductContext);

  return (
    <>
      <Navbar />
      <div className="shoppingcart w-3/4 mt-20">

      
        {cart.map((item) => (
          <tr
            key={`${item.id}-${item.size}`}
            className="flex items-center justify-around  bg-[#FBFBFB] w-full py-3"
          >
            <td className="w-1/4 flex items-center gap-2">
              <img src={item.image} className="h-20 cursor-pointer " />
              <span className="whitespace-nowrap cursor-pointer">{item.title}</span>
            </td>

            <td className="w-1/4 flex gap-5 items-center justify-between">
              <span className="text-[#46A358] ">{item.price}</span>
              <span>{item.quantity}</span>
              <div><span><Trash className="cursor-pointer" size={15} color="#46A358" /></span></div>
              
            </td>
          </tr>
        ))}
      </div>

      <div className="relatedpost mt-32">
        <h6 className="text-[#46A358] border-b border-[#46A35880] font-semibold">
          Related Products
        </h6>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide className="py-5" key={product.id}>
                  <motion.div
      whileHover={{
        scale: 1.05,
        y: -6
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="post-card"
    > <div className="product-card cursor-pointer flex gap-1.5 flex-col items-center my-6">
                <img className="h-28" src={product.image} alt={product.title} />
                <div className="flex flex-col text-left">
                  <h3 className="text-[#3D3D3D] text-base text-left">
                    {product.title}
                  </h3>
                  <span className="text-[#46A358] text-left text-sm">
                    {product.price}.00
                  </span>
                </div>
              </div></motion.div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pb-12">
        <Footer />
      </div>

      <div className="bottomsheet   bg-white shadow sm:hidden flex left-0  fixed bottom-0 py-5 w-full rounded-t-3xl  ">
        <ul className="flex text-black justify-center gap-12 w-full ">
          <li>
            <House color="#D9D9D9" />
          </li>
          <li>
            <Heart color="#D9D9D9" />
          </li>
          <li className="cursor-pointer">
            <ShoppingCartIcon color="#D9D9D9" />
          </li>
          <li className="cursor-pointer">
            <UserRound color="#D9D9D9" />
          </li>
        </ul>
      </div>
    </>
  );
}
