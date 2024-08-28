import { createContext, useContext, useEffect, useState } from 'react';

// Create a CartContext
const CartContext = createContext();

// CartProvider component
export function CartProvider({ children }) {
  // Initialize cartData state with data from localStorage or an empty array
  const [cartData, setCartData] = useState(() => {
    const storedCartData = localStorage.getItem('cartData');
    return storedCartData ? JSON.parse(storedCartData) : [];
  });

  const total = cartData.reduce((acc, cur) => {
    return acc + cur.details.price * cur.count;
  }, 0);

  // Update localStorage whenever cartData changes
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  return (
    // Provide cartData and setCartData as an object to children components
    <CartContext.Provider value={{ cartData, setCartData, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
