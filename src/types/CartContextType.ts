import { CartItemI } from '../interfaces/CartItemI';
import { ProductI } from '../interfaces/ProductI';

export interface CartContextType {
  cart: CartItemI[];
  addProduct: (product: ProductI) => void;
  removeProduct: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}
