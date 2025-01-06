import { CartItemI } from '../interfaces/CartItemI';
import { ProductI } from '../interfaces/ProductI';

export interface CartContextType {
  cart: CartItemI[];
  addProduct: (product: ProductI) => void;
  removeProduct: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  calculateSubtotal: () => void;
  clearCart: () => void;
  totalCart: number;
  applyDiscount: (discount: number) => void;
  appliedDiscount: boolean;
  appliedDiscountQuantity: number;
  subtotal: number;
  finishOrder: () => void;
  applyTotalCart: () => void;
  shippingCost: number;
  saveShippingCost: (cost: number) => void;
  restartOrder: () => void;
}
