import { Asterisk } from "lucide-react";

export default function Input({ type, className, text, placeholder, label }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="flex items-center text-base font-normal   text-[#3D3D3D]">
          {label}
          <Asterisk size={12} color="#F03800" />
        </label>
        <input
          text={text}
          type={type}
          className={className}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
