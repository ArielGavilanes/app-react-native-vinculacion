import { CartItemI } from '../interfaces/CartItemI';

export interface CartContextType {
  cart: CartItemI[];
  addProduct: (product: CartItemI) => void;
  removeProduct: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}
