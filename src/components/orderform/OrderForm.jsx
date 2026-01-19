import { Asterisk, SpaceIcon } from "lucide-react";
import Navbar from "../navbar/Navbar";
import Input from "../input/Input";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import toast from "react-hot-toast";

export default function OrderForm() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row gap-10">
        <form className=" w-full sm:w-3/5">
          <h3 className="my-5 font-semibold">Billing Address</h3>
          <div className="inputs grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            <Input
              label={<span>FirstName</span>}
              className="border h-10 px-2 outline-[#46A358] border-[#EAEAEA] rounded-xs"
            />
            <Input
              label={<span>LastName</span>}
              className="border h-10 px-2  outline-[#46A358] border-[#EAEAEA] rounded-xs"
            />
            <div className="select flex flex-col gap-1">
              <label className="text-[#3D3D3D] flex items-center">
                {" "}
                <span>Country/Region</span>{" "}
                <Asterisk size={12} color="#F03800" />
              </label>
              <select
                className="
    border border-[#EAEAEA]
    px-3 py-2 text-sm
    rounded
    outline-none
    focus:border-[#46A358]
    focus:ring-0
  "
              >
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <Input
              label="Town/City"
              className="border h-10 px-2  outline-[#46A358] border-[#EAEAEA]"
            />
            <Input
              label="Street Address"
              placeholder="House number and street name"
              className="border h-10 px-2 text-xs outline-[#46A358] border-[#EAEAEA]"
            />
            <Input
              label=""
              placeholder="Appartment, suite, unit, etc. (optional)"
              className="border mt-3 h-10 px-2  text-xs outline-[#46A358] border-[#EAEAEA]"
            />
            <div className="select flex flex-col gap-1">
              <label className="text-[#3D3D3D] flex items-center">
                {" "}
                <span> State</span> <Asterisk size={12} color="#F03800" />
              </label>
              <select
                className="
    border border-[#EAEAEA]
    px-3 py-2 text-sm
    rounded
    outline-none
    focus:border-[#46A358]
    focus:ring-0
    text-[#A5A5A5]
  "
              >
                <option className="text-[#A5A5A5]">Select a state</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <Input
              label="Zip"
              className="border h-10 px-2  text-xs outline-[#46A358] border-[#EAEAEA]"
            />
            <Input
              label="Email Address"
              className="border h-10 px-2  text-xs outline-[#46A358] border-[#EAEAEA]"
            />
            <div className="select flex flex-col gap-1">
              <label className="text-[#3D3D3D] flex items-center">
                {" "}
                <span> Phone Number</span>{" "}
                <Asterisk size={12} color="#F03800" />
              </label>
              <select
                className="
    border border-[#EAEAEA]
    px-3 py-2 text-sm
    rounded
    outline-none
    focus:border-[#46A358]
    focus:ring-0
    text-[#A5A5A5]
  "
              >
                <option className="text-[#A5A5A5] ">+996</option>
                <option>+997</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>

            <div
              className="
          flex flex-col"
            >
              <label className="text-[#3D3D3D] text-sm mb-1" htmlFor="">
                Order notes(Optional)
              </label>
              <textarea
                className=" w-full  border outline-[#46A358] border-[#EAEAEA] h-40"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </form>

        <div className="sm:w-2/5 w-full mt-5">
          <h3 className="font-semibold mb-4">Your Order</h3>
          <div className="items flex flex-col gap-2">
            <div className="order-item bg-[#FBFBFB] flex  justify-between px-2 items-center">
              <div className="product-info flex">
                <img className="h-16" src="./images/product3.png" alt="Plant" />
                <div>
                  <p className="name font-medium whitespace-nowrap">
                    Barberton Daisy
                  </p>
                  <span className="sku text-[#727272] text-xs hidden sm:block">
                    SKU: 1995751877966
                  </span>
                </div>
              </div>
              <span className="price text-right text-sm text-[#46A358]">
                $238.00
              </span>
            </div>
            <div className="order-item bg-[#FBFBFB] flex justify-between px-2 items-center">
              <div className="product-info flex">
                <img className="h-16" src="./images/product3.png" alt="Plant" />
                <div>
                  <p className="name font-medium whitespace-nowrap">
                    Barberton Daisy
                  </p>
                  <span className="sku text-[#727272] text-xs hidden sm:block">
                    SKU: 1995751877966
                  </span>
                </div>
              </div>
              <span className="price text-sm text-right text-[#46A358]">
                $238.00
              </span>
            </div>
          </div>

          <p className="text-right text-sm text-[#3D3D3D]">
            Have a coupon code?{" "}
            <a className="text-[#46A358] cursor-pointer">Click here</a>
          </p>

          <div className="prices flex gap-2 flex-col">
            {" "}
            <div className="flex justify-between mt-2">
              <span className="text-[#3D3D3D]">Subtotal</span>
              <span>$2,683.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#3D3D3D]">Shipping</span>
              <span>$16.00</span>
            </div>
          </div>
          <div className="divider mt-1"></div>
          <div className="total flex justify-between mt-2">
            <span className="text-[#3D3D3D] font-semibold">Total</span>
            <span>$2,699.00</span>
          </div>
          <Button
            text="Place Order"
            className="bg-[#46A358] w-full text-white rounded-xs py-2 mt-3 cursor-pointer text-xl font-semibold flex items-center justify-center"
            type="submit"
            onClick={() => toast.success("Order submitted")}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
