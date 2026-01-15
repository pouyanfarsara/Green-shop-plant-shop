import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { motion, AnimatePresence } from "motion/react";

import Button from "../../components/button/Button";
import {
  ChevronLeft,
  Facebook,
  Heart,
  House,
  Linkedin,
  Mail,
  ShoppingCart,
  ShoppingCartIcon,
  Twitter,
  UserRound,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import products from "../../components/productData/Productdata";
import { ProductContext } from "../../components/productcontext/ProductContext";

export default function Shoppage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useContext(ProductContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [selectedsize, setSelectedsize] = useState();
  const [activetab, setactivetab] = useState(0);

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>محصول یافت نشد</p>;
  return (
    <>
      <div className="hidden sm:block md:blcok">
        <Navbar />
      </div>
      <div className=" mt-10 items-center flex-col sm:flex sm:flex-row">
        <div className="productgallery sm:w-1/2">
          <button
            onClick={() => navigate("/")}
            className="sm:hidden p-1 bg-[#F6F6F6] rounded-full"
          >
            <ChevronLeft size={20} color="#3D3D3D" />
          </button>
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
            <img src={product.image} className="mx-auto w-2xs sm:w-xs" />
          </motion.div>
        </div>

        <div className="productinfo sm:w-1/2">
          <div className="info font-semibold flex flex-col gap-2">
            <h3 className=" text-xl sm:text-2xl whitespace-nowrap">
              {product.title}
            </h3>
            <span className=" text-sm text-[#46A358]">{product.price}</span>
            <div className="divider"></div>
          </div>
          <div className="shortdescription flex flex-col gap-2 w-full">
            <h6 className="text-[#3D3D3D] text-sm font-semibold pt-1">
              Short Description :
            </h6>
            <p className="text-[#727272] text-sm ">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.
            </p>
          </div>
          <div className="size">
            <span className="text-[#3D3D3D]">size :</span>

            <ul className="flex gap-3 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <li
                  key={size}
                  onClick={() => setSelectedsize(size)}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm flex items-center justify-center
          ${
            selectedsize === size
              ? "border-2 border-[#46A358] text-[#46A358]"
              : "border border-[#EAEAEA] text-[#727272]"
          }`}
                >
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
                    {size}
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div className="options flex gap-3 items-center mt-3">
            <div className=" items-center gap-5 hidden sm:flex">
              <button
                className="increase   bg-[#46A358]  text-lg  flex justify-center items-center  text-white cursor-pointer"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <span className="text-[#3D3D3D]">{count}</span>
              <button
                className="decrease   bg-[#46A358]  text-lg  flex justify-center items-center  text-white cursor-pointer"
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                text="BUY NOW"
                className={
                  "sm:bg-[#46A358] whitespace-nowrap sm:text-amber-50 text-[#46A358] px-7 py-2 flex cursor-pointer sm:block  items-center text-center hidden gap-1 rounded-md font-base "
                }
              />
              <Button
                text="ADD TO CART"
                onClick={() => addToCart(product, 1, selectedSize)}
                className={
                  " sm:bg-transparent whitespace-nowrap border border-[#46A358] sm:text-[#46A358] px-7 py-2  cursor-pointer  items-center text-center  gap-1 rounded-md font-base hover:bg-[#62b1726d] hover:text-white sm:block hidden "
                }
                onClick={() => {
                  if (!selectedsize) {
                    setIsModalOpen(true);
                    return;
                  }
                  addToCart(product, count, selectedsize);
                }}
              />
              <Button
                className="hidden    sm:flex justify-center items-center font-light border rounded px-2 py-2 border-[#46A358]"
                icon={<Heart color="#46A358" size={14} />}
              />
            </div>
          </div>
          <div className="details flex flex-col mt-5 gap-2">
            <span className="text-[#727272]">SKU: 1995751877966</span>
            <span className="text-[#727272]">
              categories : {product.category}
            </span>
            <span className="text-[#727272]"> Tags : Home, Garden, Plants</span>
          </div>
          <div className="share flex gap-3 pt-3 items-center">
            <h6>Share this products :</h6>
            <ul className="flex gap-2 items-center">
              <li className="cursor-pointer">
                <Facebook size={15} />
              </li>
              <li className="cursor-pointer">
                <Twitter size={15} />
              </li>
              <li className="cursor-pointer">
                <Linkedin size={15} />
              </li>
              <li className="cursor-pointer">
                <Mail size={15} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="descriptiontab mt-10">
        <div className="tabs flex gap-3">
          <button
            onClick={() => setactivetab(0)}
            className={activetab === 0 ? "active" : "text-[#727272]"}
          >
            Product Description
          </button>
          <button
            onClick={() => setactivetab(1)}
            className={activetab === 1 ? "active " : "text-[#727272]"}
          >
            Reviews
          </button>
        </div>

        <div className="tabcontent">
          {activetab === 0 && (
            <div className="tab1 flex flex-col gap-5">
              <p className="text1 text-[#727272] pt-5 text-sm ">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam fringilla augue nec est tristique auctor.
                Donec non est at libero vulputate rutrum. Morbi ornare lectus
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget
                laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                eros eget velit. Donec ac tempus ante. Fusce ultricies massa
                massa. Fusce aliquam, purus eget sagittis vulputate, sapien
                libero hendrerit est, sed commodo augue nisi non neque. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
                lorem et placerat vestibulum, metus nisi posuere nisl, in
                accumsan elit odio quis mi. Cras neque metus, consequat et
                blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
                imperdiet ligula euismod eget. The ceramic cylinder planters
                come with a wooden stand to help elevate your plants off the
                ground.
              </p>
              <div className="text2 ">
                <h5 className="font-semibold text-[#3D3D3D]">Living Room :</h5>
                <span className="text-sm text-[#727272]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </span>
              </div>
              <div className="text3">
                <h5 className="font-semibold text-[#3D3D3D]">Dining Room :</h5>
                <span className="text-sm text-[#727272]">
                  The benefits of houseplants are endless. In addition to
                  cleaning the air of harmful toxins, they can help to improve
                  your mood, reduce stress and provide you with better sleep.
                  Fill every room of your home with houseplants and their
                  restorative qualities will improve your life.
                </span>
              </div>
              <div className="text4">
                <h5 className="font-semibold text-[#3D3D3D]">Office: :</h5>
                <span className="text-sm text-[#727272]">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate your plants
                  off the ground. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
          )}
          {}
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
                {" "}
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

      <div className="pb-30">
        <Footer />
      </div>

      <div className="bottomsheet   bg-white shadow sm:hidden flex flex-col left-0  fixed bottom-0 py-5 w-full rounded-t-3xl  ">
        <div className="flex justify-between items-center w-full px-4">
          <div className="flex gap-3 px-4 items-center">
            <button
              className="increase rounded-full  bg-[#F6F6F6]  text-lg  flex justify-center items-center  text-[#A5A5A5] cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <span className="text-[#3D3D3D] text-base">{count}</span>
            <button
              className="decrease rounded-full   bg-[#F6F6F6]  text-lg  flex justify-center items-center  text-[#A5A5A5] cursor-pointer"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>

          <span className=" text-sm text-[#46A358]">{product.price}</span>
        </div>

        <div className="buy flex gap-3 mt-4 px-6 ">
          <button className="bg-[#46A358] text-sm rounded-3xl text-white px-8 cursor-pointer py-2">
            Buy Now
          </button>
          <button className="bg-[#F6F6F6] px-3 rounded-full flex justify-center items-center">
            <Link to="/shoppingcart">
              
              <ShoppingCart color="#727272" size={16} />
            </Link>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-start pt-10 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white p-6 rounded-xl w-96 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-gray-600 mb-4 whitespace-nowrap">
                Before adding to your cart, please choose a size.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-green-500 text-white px-4 py-1 text-sm rounded hover:bg-green-600"
              >
                Got it{" "}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
