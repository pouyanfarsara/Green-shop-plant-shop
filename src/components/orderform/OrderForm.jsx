import { Asterisk, SpaceIcon } from "lucide-react";
import Navbar from "../navbar/Navbar";
import Input from "../input/Input";

export default function OrderForm() {
  return (
    <>
      <Navbar />
      <form className="w-3/5">
        <h3 className="my-5 font-semibold">Billing Address</h3>
        <div className="inputs grid grid-cols-2 gap-5 ">
          <Input
            label={<span>FirstName</span>}
            className="border py-1 px-2 outline-[#b4b0b0] border-[#EAEAEA] rounded-xs"
          />
          <Input
            label={<span>LastName</span>}
            className="border py-1 px-2 outline-[#b4b0b0] border-[#EAEAEA] rounded-xs"
          />
          <div className="select flex flex-col gap-1">
            <label className="text-[#3D3D3D]">Country/Region</label>
            <select className="border outline-[#b4b0b0] border-[#EAEAEA]  rounded-xs">
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>

          <Input
            label="Town/City"
            className="border py-1 px-2  outline-[#b4b0b0] border-[#EAEAEA]"
          />
        </div>
      </form>
    </>
  );
}
