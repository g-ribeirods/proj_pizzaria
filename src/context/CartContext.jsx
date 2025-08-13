import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Adiciona item ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === product.name);

      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Aumenta a quantidade de um item
  const increaseQuantity = (productName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Diminui a quantidade de um item (mínimo 1)
  const decreaseQuantity = (productName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === productName
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Remove um item do carrinho
  const removeItem = (productName) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.name !== productName)
    );
  };

  // Limpa todo o carrinho
  const clearCart = () => setCartItems([]);

  // Total acumulado
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto
export function useCart() {
  return useContext(CartContext);
}