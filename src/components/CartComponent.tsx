import { View } from 'react-native';
import { CartItemI } from '../interfaces/CartItemI';

type CartComponentProps = {
  cart: CartItemI[];
};
export const CartComponent = ({ cart }: CartComponentProps) => {
  return <View></View>;
};
