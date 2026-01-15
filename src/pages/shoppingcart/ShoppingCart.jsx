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
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const context = useContext(ProductContext);
  const { cart } = useContext(ProductContext);
  const [activeIcon, setActiveIcon] = useState("home");

  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row  mt-10 gap-3">
        <div className="shoppingcart w-full sm:w-3/4 flex flex-col gap-2 ">
          {cart.map((item) => (
            <tr
              key={`${item.id}-${item.size}`}
              className="flex flex-col sm:flex-row sm:items-center justify-start sm:justify-between  bg-[#FBFBFB] w-full py-1"
            >
              <td className=" px-1 flex items-center gap-2">
                <img src={item.image} className="h-20 cursor-pointer " />
                <span className="whitespace-nowrap cursor-pointer">
                  {item.title}
                </span>
              </td>

              <td className=" flex gap-5 items-center  justify-end sm:justify-between">
                <span className="text-[#46A358] ">{item.price}</span>
                <span>{item.quantity}</span>
                <div>
                  <span>
                    <Trash
                      className="cursor-pointer"
                      size={15}
                      color="#46A358"
                    />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </div>

        <div className=" w-full sm:w-1/4 flex flex-col gap-1">
          <h4 className="border-b border-[#46a3594d] font-semibold p-1">
            Cart Totals
          </h4>
          <label className="text-[#3D3D3D] pt-2 text-xs">Coupon Apply</label>
          <div className="flex items-center mt-2 w-full">
            <input
              className="text-[#A5A5A5] w-full text-sm border h-10 border-[#46A358] outline-0 rounded-l py-1.5 px-2.5"
              placeholder="Enter coupon code here"
            />
            <Button
              className={
                "bg-[#46A358] cursor-pointer whitespace-nowrap text-amber-50  px-2.5 py-1.5 flex items-center h-10 rounded-r font-semibold "
              }
              text="Apply"
            />
          </div>
          <div className="subtotal flex justify-between w-full ">
            <div className="font-light">Subtotal</div>
            <span className="font-semibold">$2000.00</span>
          </div>
          <div className="Discount flex justify-between w-full ">
            <div className="font-light">Coupon Discount</div>
            <span className="font-semibold">$00.00</span>
          </div>
          <div className="Discount flex justify-between w-full ">
            <div className="font-light">Shiping</div>
            <span className="font-semibold">$16.00</span>
          </div>
          <div className="Discount flex justify-between w-full mt-3 ">
            <div className="font-semibold">Total</div>
            <span className="font-semibold ">$2600.00</span>
          </div>
          <Link to='/OrderForm'>  <Button
            text="Proceed To Checkout"
            className={
              "bg-[#46A358] cursor-pointer whitespace-nowrap text-amber-50  px-2.5 py-2 flex items-center justify-center  rounded font-semibold "
            }
          /></Link>
        
          <span className="text-center text-[#46A358] text-xs cursor-pointer">
            Continue Shopping
          </span>
        </div>
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
                  y: -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="post-card"
              >
                <div className="product-card cursor-pointer flex gap-1.5 flex-col items-center my-6">
                  <img
                    className="h-28"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="flex flex-col text-left">
                    <h3 className="text-[#3D3D3D] text-base text-left">
                      {product.title}
                    </h3>
                    <span className="text-[#46A358] text-left text-sm">
                      {product.price}.00
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pb-12">
        <Footer />
      </div>

      <div className="bottomsheet bg-white shadow sm:hidden flex left-0 fixed bottom-0 py-5 w-full rounded-t-3xl">
        <ul className="flex text-black justify-center gap-12 w-full">
          <li onClick={() => setActiveIcon("home")}>
            <Link to="/">
              <House color={activeIcon === "home" ? "#46A358" : "#D9D9D9"} />
            </Link>
          </li>
          <li onClick={() => setActiveIcon("heart")}>
            <Heart color={activeIcon === "heart" ? "#46A358" : "#D9D9D9"} />
          </li>
          <li onClick={() => setActiveIcon("cart")}>
            <ShoppingCartIcon
              color={activeIcon === "cart" ? "#46A358" : "#D9D9D9"}
            />
          </li>
          <li onClick={() => setActiveIcon("user")}>
            <UserRound color={activeIcon === "user" ? "#46A358" : "#D9D9D9"} />
          </li>
        </ul>
      </div>
    </>
  );
}
