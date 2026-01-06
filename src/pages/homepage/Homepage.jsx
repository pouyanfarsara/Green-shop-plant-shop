import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Navbar from "../../components/navbar/Navbar";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/button/Button";
import { motion } from "motion/react";
import { Box, Slider } from "@mui/material";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Heart,
  House,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  PhoneCall,
  Search,
  ShoppingCartIcon,
  SlidersHorizontal,
  Twitter,
  UserRound,
  Youtube,
} from "lucide-react";
import Tabsection from "../../components/tab/Tab";
import { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";
import { ProductContext } from "../../components/productcontext/ProductContext";
import LoginModal from "../../components/loginmodal.jsx/LoginModal";

const categories = [
  { id: 1, name: "House Plants", count: 33 },
  { id: 2, name: "Potter Plants", count: 12 },
  { id: 3, name: "Seeds", count: 65 },
  { id: 4, name: "Small Plants", count: 39 },
  { id: 5, name: "Big Plants", count: 39 },
  { id: 6, name: "Succulents Plants", count: 39 },
  { id: 7, name: "Trerrariums Plants", count: 39 },
  { id: 8, name: "Gardening", count: 39 },
  { id: 9, name: "accessories", count: 39 },
];
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
export default function Homepage() {
  const [activecategory, setactivecategory] = useState("All");
  const [price, setPrice] = useState(0);
  const { addToCart } = useContext(ProductContext);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:block md:blcok">
        <Navbar />
      </div>
      {/* in mobile size */}

      <div className="relative flex gap-1.5 pt-10  w-full sm:hidden text-center ">
        <input
          className="sm:hidden outline-0 w-full  bg-[#F8F8F8] py-3.5 pl-10 rounded-xl"
          type="search"
          placeholder="Find your plants"
        />
        <div className="bg-[#46A358] shadow-2xs px-4 flex justify-center items-center rounded-xl">
          <SlidersHorizontal color="#FFFFFF" size={17} />
        </div>
        <span className="absolute top-14   left-3">
          <Search color="#A5A5A5" size={19} />
        </span>
      </div>
      <div
        className="
  mainbanner
  rounded
  px-3
  mt-3
  bg-[#F5F5F580]
  
"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sllide1 flex items-center justify-between sm:px-10 pl-5 pt-10 pb-5">
              <div className="bannertext">
                <span className="text-[#3D3D3D] whitespace-nowrap text-sm">
                  Welcome to GreenShop
                </span>
                <p className="font-black text-2xl sm:text-6xl text-[#3D3D3D]">
                  Let’s Make A Better
                  <span className="text-[#46A358] "> Planet</span>
                </p>
                <small className="hidden sm:block text-[#727272]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </small>
                <small className="block sm:hidden text-[#727272]">
                  We are an online plant shop offering a wide range{" "}
                </small>

                <div className="flex items-center">
                  <span>
                    <Button
                      text={"SHOP NOW"}
                      icon={
                        <ArrowRight
                          className="block sm:hidden"
                          size={20}
                          color="#46A358"
                        />
                      }
                      className={
                        "sm:bg-[#46A358] cursor-pointer bg-transparent whitespace-nowrap sm:text-amber-50 text-[#46A358] sm:px-5 py-3 flex items-center gap-1 rounded-md font-bold mt-1 sm:mt-5"
                      }
                    />
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="images flex ">
                <img
                  className=" w-2xs sm:w-4xl "
                  src="./images/flower.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sllide1 flex items-center justify-between sm:px-10 pl-5 pt-10 pb-5">
              <div className="bannertext">
                <span className="text-[#3D3D3D] whitespace-nowrap text-sm">
                  Welcome to GreenShop
                </span>
                <p className="font-black text-2xl sm:text-6xl text-[#3D3D3D]">
                  Let’s Make A Better
                  <span className="text-[#46A358] "> Planet</span>
                </p>
                <small className="hidden sm:block text-[#727272]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </small>
                <small className="block sm:hidden text-[#727272]">
                  We are an online plant shop offering a wide range{" "}
                </small>

                <div className="flex items-center">
                  <span>
                    <Button
                      text={"SHOP NOW"}
                      icon={
                        <ArrowRight
                          className="block sm:hidden"
                          size={20}
                          color="#46A358"
                        />
                      }
                      className={
                        "sm:bg-[#46A358] cursor-pointer bg-transparent whitespace-nowrap sm:text-amber-50 text-[#46A358] sm:px-5 py-3 flex items-center gap-1 rounded-md font-bold mt-1 sm:mt-5"
                      }
                    />
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="images flex ">
                <img
                  className=" w-2xs sm:w-4xl "
                  src="./images/flower.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
      <div className="mainsection gap-8  flex mt-7">
        <div className="categories hidden md:block w-1/4 bg-[#FBFBFB]">
          <h4 className="font-bold mt-3.5 ml-4 text-[#3D3D3D]">Categories</h4>
          <ul className="px-7 text-[#3D3D3D]   flex-col  text-sm">
            {categories.map((plant) => (
              <li
                key={plant.id}
                className="flex cursor-pointer py-2 justify-between"
              >
                <span
                  className={
                    activecategory === plant.name ? "activecategory" : ""
                  }
                  onClick={() => setactivecategory(plant.name)}
                >
                  {plant.name}
                </span>

                <span
                  className={
                    activecategory === plant.name ? "activecategory" : ""
                  }
                  onClick={() => setactivecategory(plant.name)}
                >
                  {plant.count}
                </span>
              </li>
            ))}
          </ul>

          <div className="pricerange pt-3.5  justify-center">
            <h4 className="font-bold pl-4 text-[#3D3D3D]">Price Range</h4>
            <div className="pl-6 pt-1">
              <Box sx={{ width: 150 }}>
                <Slider
                  color="secondary"
                  getAriaLabel={() => "Temperature range"}
                  valueLabelDisplay="auto"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Box>
            </div>
            <span className="text-[#3D3D3D] pl-6">
              Price: <small className="text-[#46A358]">$ {price}</small>
            </span>
            <Button
              text={"Filter"}
              className={
                "bg-[#46A358] cursor-pointer text-amber-50 block px-6 py-1.5 mx-6 mt-3.5  items-center gap-1 rounded-md font-bold"
              }
            />
          </div>

          <div className="size">
            <h4 className="p-4 mt-3  font-bold text-[#3D3D3D]">Size</h4>
            <ul className=" px-6 text-sm flex flex-col gap-3 text-[#3D3D3D]">
              <li className="cursor-pointer">Small</li>
              <li className="cursor-pointer">medium</li>
              <li className="cursor-pointer">Large</li>
            </ul>
          </div>
          <div className="salebanner mt-5 w-full">
            <img
              className="cursor-pointer"
              src="./images/photo_2025-12-22_20-17-09.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="productsection  sm:px-10 ">
          <div className="flex  justify-between  mb-4">
            <div className="tab w-full ">
              <Tabsection />
            </div>
          </div>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="findmore  w-full flex flex-col md:flex-row gap-10  mt-10 ">
          <div className="flex-col  md:flex-col flex sm:flex-row pb-1 items-center px-5 sm:justify-between bg-[#FBFBFB]  md:w-full">
            <img src="./images/flower.png" alt="" width={200} />
            <div className="text-center px-2  sm:text-right mt-3">
              <h5 className="font-bold  md:text-xl">
                SUMMER CACTUS & SUCCULENTS
              </h5>
              <p className="text-sm text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <Button
                text="Find More"
                icon={<ArrowUpRight size={15} />}
                className={
                  "sm:bg-[#46A358] bg-transparent whitespace-nowrap sm:text-amber-50 text-[#46A358] px-7 py-2 flex mx-auto  items-center  cursor-pointer  gap-1 rounded-md font-bold mt-5"
                }
              />
            </div>
          </div>

          <div className="sm:flex-row flex-col md:flex-col flex  sm:flex  pb-2 items-center  px-10 sm:justify-between bg-[#FBFBFB] md:w-full">
            <img src="./images/flower.png" alt="" width={200} />
            <div className="text text-center sm:text-right mt-3">
              <h5 className="font-bold text-xl">SUMMER CACTUS & SUCCULENTS</h5>
              <p className="text-sm text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <Button
                text="Find More"
                icon={<ArrowUpRight size={15} />}
                className={
                  "sm:bg-[#46A358] bg-transparent whitespace-nowrap sm:text-amber-50 text-[#46A358] px-7 py-2 flex cursor-pointer mx-auto items-center text-center  gap-1 rounded-md font-bold mt-5"
                }
              />
            </div>
          </div>
        </div>
      </motion.h1>

      <div className="mt-25 blogposts text-center">
        <h3 className="font-black text-xl text-[#3D3D3D]">Our Blog Posts</h3>
        <span className="text-[#727272] text-sm">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </span>

        <div className="posts mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3 grid-cols-1">
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
            <div className="postcard cursor-pointer mx-2 flex flex-col bg-[#FBFBFB]">
              <img src="./images/blog1.png" alt="" />
              <div className="details px-3 pt-1 text-left flex flex-col">
                <span className="text-[#46A358] text-xs">
                  September 12 I Read in 6 minutes
                </span>
                <span className="title text-[#3D3D3D] font-semibold">
                  Cactus & Succulent Care Tips
                </span>
                <span className="description text-[#727272] text-xs">
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </span>
                <Button
                  text="Read More"
                  icon={<ArrowRight size={14} />}
                  className={
                    "text-left cursor-pointer bg-transparent items-center whitespace-nowrap text-[#3D3D3D]  py-3 flex gap-1  "
                  }
                />
              </div>
            </div>{" "}
          </motion.div>
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
            <div className="postcard cursor-pointer mx-2 flex flex-col bg-[#FBFBFB]">
              <img src="./images/blog2.png" alt="" />
              <div className="details px-3 pt-1 text-left flex flex-col">
                <span className="text-[#46A358] text-xs">
                  September 12 I Read in 6 minutes
                </span>
                <span className="title text-[#3D3D3D] font-semibold">
                  Cactus & Succulent Care Tips
                </span>
                <span className="description text-[#727272] text-xs">
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </span>
                <Button
                  text="Read More"
                  icon={<ArrowRight size={14} />}
                  className={
                    "text-left cursor-pointer bg-transparent items-center whitespace-nowrap text-[#3D3D3D]  py-3 flex gap-1  "
                  }
                />
              </div>
            </div>
          </motion.div>

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
            <div className="postcard mx-2 cursor-pointer flex flex-col bg-[#FBFBFB]">
              <img src="./images/blog3.png" alt="" />
              <div className="details px-3 pt-1 text-left flex flex-col">
                <span className="text-[#46A358] text-xs">
                  September 12 I Read in 6 minutes
                </span>
                <span className="title text-[#3D3D3D] font-semibold">
                  Cactus & Succulent Care Tips
                </span>
                <span className="description text-[#727272] text-xs">
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </span>
                <Button
                  text="Read More"
                  icon={<ArrowRight size={14} />}
                  className={
                    "text-left cursor-pointer bg-transparent items-center whitespace-nowrap text-[#3D3D3D]  py-3 flex gap-1  "
                  }
                />
              </div>
            </div>
          </motion.div>

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
            <div className="postcard mx-2 cursor-pointer flex flex-col bg-[#FBFBFB]">
              <img src="./images/blog4.png" alt="" />
              <div className="details px-3 pt-1 text-left flex flex-col">
                <span className="text-[#46A358] text-xs">
                  September 12 I Read in 6 minutes
                </span>
                <span className="title text-[#3D3D3D] font-semibold">
                  Cactus & Succulent Care Tips
                </span>
                <span className="description text-[#727272] text-xs">
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </span>
                <Button
                  text="Read More"
                  icon={<ArrowRight size={14} />}
                  className={
                    "text-left cursor-pointer bg-transparent items-center whitespace-nowrap text-[#3D3D3D]  py-3 flex gap-1  "
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pb-15">
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
          <li>
            <UserRound
              color={true ? "#46A358" : "#3D3D3D"}
              onClick={() => setIsLoginOpen(true)}
            />
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center mx-4">
        {" "}
        <LoginModal
          className=""
          isopen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      </div>
    </>
  );
}
