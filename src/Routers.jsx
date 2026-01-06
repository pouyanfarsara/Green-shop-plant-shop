import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shoppage from "./pages/shop/Shoppage";
import ShoppingCart from "./pages/shoppingcart/ShoppingCart";


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shoppingcart" element={<ShoppingCart/>} />
      
     
        <Route path="/product/:id" element={<Shoppage />} />
      </Routes>
    </>
  );
};
export default Routers;