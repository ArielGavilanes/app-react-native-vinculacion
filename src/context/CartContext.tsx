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
  const [subtotal, setSubtotal] = useState<number>(0);
  const [appliedDiscount, setAppliedDiscount] = useState<boolean>(false);
  const [shippingCost, setShippingCost] = useState<number>(3.4);
  const [appliedDiscountQuantity, setAppliedDiscountQuantity] =
    useState<number>(0);

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
              }
            : item,
        );
      }
      return [
        ...prevCart,
        { product, quantity: 1, totalProduct: product.price },
      ];
    });
    calculateTotalForProduct(product.id);
    calculateSubtotal();
  };

  const removeProduct = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
    calculateSubtotal();
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
    calculateSubtotal();
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
    calculateSubtotal();
  };

  const clearCart = () => {
    setCart([]);
    calculateSubtotal();
  };

  const calculateSubtotal = () => {
    const total = cart.reduce((acc, item) => acc + item.totalProduct, 0);
    setSubtotal(total);
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

  const applyDiscount = (discount: number) => {
    const finishDiscount = (totalCart * discount) / 100;
    setAppliedDiscountQuantity(finishDiscount);
    const total = subtotal - finishDiscount;
    setTotalCart(total);
    setAppliedDiscount(true);
  };

  const finishOrder = () => {
    clearCart();
    setTotalCart(0);
    setAppliedDiscount(false);
    setAppliedDiscountQuantity(0);
    setSubtotal(0);
    setShippingCost(0);
  };

  const restartOrder = () => {
    setTotalCart(0);
    setAppliedDiscount(false);
    setAppliedDiscountQuantity(0);
    setSubtotal(0);
    setShippingCost(0);
  };

  const applyTotalCart = () => {
    setTotalCart(subtotal);
  };

  const saveShippingCost = (cost: number) => {
    setShippingCost(cost);
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
        calculateSubtotal,
        totalCart,
        applyDiscount,
        appliedDiscount,
        subtotal,
        finishOrder,
        appliedDiscountQuantity,
        applyTotalCart,
        shippingCost,
        saveShippingCost,
        restartOrder,
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
