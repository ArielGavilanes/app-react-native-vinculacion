import { createContext, ReactNode, useContext, useState } from 'react';
import { CartContextType } from '../types/CartContextType';
import { CartItemI } from '../interfaces/CartItemI';
import { ProductI } from '../interfaces/ProductI';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItemI[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  const addProduct = (product: ProductI) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.product.id === product.id,
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalProduct: item.product.price * item.quantity,
              }
            : item,
        );
      }
      return [
        ...prevCart,
        { product, quantity: 1, totalProduct: product.price },
      ];
    });
    calculateTotalCart();
    // console.log('totalCart', totalCart);
  };

  const removeProduct = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
    calculateTotalCart();
  };

  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
    calculateTotalForProduct(id);
    calculateTotalCart();
  };

  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
    calculateTotalForProduct(id);
    calculateTotalCart();
  };

  const clearCart = () => {
    setCart([]);
    calculateTotalCart();
  };

  const calculateTotalCart = () => {
    const total = cart.reduce((acc, item) => acc + item.totalProduct, 0);
    setTotalCart(total);
  };

  const calculateTotalForProduct = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id
          ? {
              ...item,
              totalProduct: item.product.price * item.quantity,
            }
          : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        calculateTotalCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
