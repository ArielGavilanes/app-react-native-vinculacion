import { ProductI } from './ProductI';

export interface CartItemI {
  product: ProductI;
  quantity: number;
  totalProduct: number;
}
