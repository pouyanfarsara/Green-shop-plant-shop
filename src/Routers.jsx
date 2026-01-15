import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shoppage from "./pages/shop/Shoppage";
import ShoppingCart from "./pages/shoppingcart/ShoppingCart";
import OrderForm from "./components/orderform/OrderForm";


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shoppingcart" element={<ShoppingCart/>} />
        <Route path="/OrderForm" element={<OrderForm/>} />
      
     
        <Route path="/product/:id" element={<Shoppage />} />
      </Routes>
    </>
  );
};
export default Routers;