import { LogIn, Search, ShoppingCartIcon } from "lucide-react";
import Button from "../button/Button";
import { useState } from "react";
import LoginModal from "../loginmodal.jsx/LoginModal";
import { Link } from "react-router-dom";
import SearchModal from "../searchmodal/Searchmodal";

export default function Navbar({ onShopClick, onBlogClick }) {
  const [openlogin, setopenlogin] = useState(false);
  const [search, setsearchopen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between border-b pb-2.5 border-b-gray-300">
        <div className="logosection">
          <img src="/images/Logo.png" alt="" />
        </div>

        <div className="menulist ">
          <ul className=" hidden   md:flex items-center text-[#3D3D3D]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link onClick={onShopClick}>Shop</Link>
            </li>
            <li>Plant Care</li>
            <li className="cursor-pointer" onClick={onBlogClick}>
              Blogs
            </li>
          </ul>
        </div>

        <div className="navop flex items-center">
          <div className="options  hidden sm:flex">
            <Button
              onClick={() => setsearchopen(true)}
              icon={<Search color="#3D3D3D" className="cursor-pointer" />}
            />
            <Link to="/shoppingcart">
              <ShoppingCartIcon color="#3D3D3D" className="cursor-pointer" />
            </Link>
          </div>

          <div className="auth">
            <Button
              text={"login"}
              icon={<LogIn size={"20px"} />}
              className={
                "bg-[#46A358] cursor-pointer text-amber-50 px-5 py-2.5 flex items-center gap-1 rounded-md font-bold"
              }
              onClick={() => setopenlogin(true)}
            />
          </div>
        </div>
      </nav>
      <SearchModal open={search} onClose={() => setsearchopen(false)} />
      <LoginModal isopen={openlogin} onClose={() => setopenlogin(false)} />
    </>
  );
}
