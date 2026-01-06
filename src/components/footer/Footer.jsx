import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Button from "../button/Button";

export default function Footer() {
  return (
    <>
      <div className="mt-20 col gap-5 sm:flex-col  md:flex py-4 px-2 pb-3 sm:gap-2 bg-[#FBFBFB]">
        <div className="features  grid grid-cols-1 gap-2  sm:text-left  sm:grid-cols-3 ">
          <div className="features1 flex flex-col text-center justify-center items-center px-1 sm:border-r border-[#46A3581A] sm:text-left">
            <img src="/images/nature.png" width={100} alt="" />
            <h5 className="text-[#3D3D3D] font-semibold">Garden Care</h5>
            <span className="text-[#727272] text-sm">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </span>
          </div>
          <div className="features2 flex flex-col text-center justify-center items-center px-2 sm:border-r border-[#46A3581A] sm:text-left ">
            <img src="/images/nature(1).png" width={100} alt="" />
            <h5 className="text-[#3D3D3D] font-semibold">Plant Renovation</h5>
            <span className="text-[#727272] text-xs">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </span>
          </div>
          <div className="features3 flex flex-col text-center justify-center items-center px-2 sm:border-r border-[#46A3581A] sm:text-left">
            <img src="/images/nature(2).png" width={100} alt="" />
            <h5 className="text-[#3D3D3D] font-semibold">Watering Graden</h5>
            <span className="text-[#727272] text-xs">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </span>
          </div>
        </div>

        <div className="newsletter mt-5 sm:mt-2 p-3">
          <h5 className="font-bold  text-semibold">
            Would you like to join newsletters?
          </h5>
          <div className="input col sm:flex items-center">
            <input
              type="text"
              className="outline-none  w-full px-5 mt-3 sm:mt-5 rounded-xl py-2 bg-white  text-[#ACACAC] "
              placeholder="Enter your Email Address ..."
            />
            <Button
              text="Join"
              className={
                "bg-[#46A358]  whitespace-nowrap sm:text-amber-50 text-center text-white px-5 py-2 flex items-center justify-center  gap-1 rounded sm:rounded-r sm:w-auto w-full  font-bold mt-3 sm:mt-5 cursor-pointer"
              }
            />
          </div>

          <p className="text-[#727272] text-sm mt-4">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-5 bg-[#46A3581A]  gap-5">
        <div className="logo ">
          <img src="/images/Logo.png" alt="" />
        </div>

        <div className="location gap-2 items-center flex">
          <MapPin color="#46A358" size={16} />
          <a href="" className="text-[#3D3D3D] text-sm ">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </a>
        </div>

        <div className="email gap-2 flex items-center">
          <Mail color="#46A358" size={16} />
          <a href="" className="text-[#3D3D3D] text-sm whitespace-nowrap">
            contact@greenshop.com
          </a>
        </div>

        <div className="phone gap-2 items-center flex">
          <PhoneCall color="#46A358" size={16} />
          <a href="" className="text-[#3D3D3D] text-sm whitespace-nowrap">
            +88 01911 717 490
          </a>
        </div>
      </div>

      <div className="footer grid grid-cols-1 gap-2 sm:grid-cols-4 py-5 px-5">
        <div className="myaccount">
          <h5 className="text-[#3D3D3D] text-sm font-semibold py-2 ">
            My Account
          </h5>
          <ul className="text-[#3D3D3D] text-xs flex flex-col gap-2">
            <li className="cursor-pointer">My Account</li>
            <li className="cursor-pointer">Our Stores</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Career</li>
            <li className="cursor-pointer">Specials</li>
          </ul>
        </div>
        <div className="myaccount">
          <h5 className="text-[#3D3D3D] text-sm font-semibold py-2 ">
            Help&Guide
          </h5>
          <ul className="text-[#3D3D3D] text-xs flex flex-col gap-2">
            <li className="cursor-pointer">My Account</li>
            <li className="cursor-pointer">Our Stores</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Career</li>
            <li className="cursor-pointer">Specials</li>
          </ul>
        </div>
        <div className="myaccount">
          <h5 className="text-[#3D3D3D] text-sm font-semibold py-2 ">
            Categories
          </h5>
          <ul className="text-[#3D3D3D] text-xs flex flex-col gap-2">
            <li className="cursor-pointer">My Account</li>
            <li className="cursor-pointer">Our Stores</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Career</li>
            <li className="cursor-pointer">Specials</li>
          </ul>
        </div>
        <div className="socialmedia">
          <h5 className="text-[#3D3D3D] text-sm font-semibold py-2">
            Social Media
          </h5>
          <div className="links flex gap-2.5">
            <a className="border-2 rounded border-[#46A35833] p-1" href="">
              <Facebook size={13} color="#46A35899" />
            </a>
            <a href="" className="border-2 rounded border-[#46A35833] p-1">
              <Instagram size={13} color="#46A35899" />
            </a>
            <a href="" className="border-2 rounded border-[#46A35833] p-1">
              <Twitter size={13} color="#46A35899" />
            </a>
            <a href="" className="border-2 rounded border-[#46A35833] p-1">
              <Linkedin size={13} color="#46A35899" />
            </a>
            <a href="" className="border-2 rounded border-[#46A35833] p-1">
              <Youtube size={13} color="#46A35899" />
            </a>
          </div>
          <h5 className="text-[#3D3D3D] text-sm font-semibold py-2">
            We accept
          </h5>
          <div className="payway">
            <img src="/images/pay.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
