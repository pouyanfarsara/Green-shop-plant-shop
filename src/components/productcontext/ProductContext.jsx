import { createContext, useState, useEffect } from "react";
import products from "../productData/Productdata";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, size = null) => {
    const existing = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity, size }]);
    }
  };

  const removeFromCart = (productId, size = null) => {
    setCart(cart.filter((item) => !(item.id === productId && item.size === size)));
  };

  const updateQuantity = (productId, size, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
