import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  let isNewItem = true;
  
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(item => item.name === product.name);
    
    if (existingItem) {
      isNewItem = false;
      return prevItems.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    
    return [...prevItems, { ...product, quantity: 1 }];
  });

  // Mostra a notificação apenas uma vez após a atualização do estado
  setTimeout(() => {
    toast.success(
      `${product.name} ${isNewItem ? 'adicionado ao carrinho!' : 'adicionado novamente!'}`,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
  }, 0);
};

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}