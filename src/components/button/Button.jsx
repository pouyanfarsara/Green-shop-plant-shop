import { LogIn } from "lucide-react";

export default function Button({className,text,icon,onClick,type= "button",...props}) {
  return (
    <>
      <button type={type} {...props} onClick={onClick} className={className}>
        <small>{text}</small>
        <small>
          {icon}   
        </small>
      </button>
    </>
  );
}
