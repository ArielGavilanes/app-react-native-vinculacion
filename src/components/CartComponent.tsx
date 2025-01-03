import { ScrollView, View, Text } from 'react-native';
import { CartItemI } from '../interfaces/CartItemI';
import { CartItemComponent } from './CartItemComponent';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { BottomPriceComponent } from './BottomPriceComponent';

type CartComponentProps = {
  cart: CartItemI[];
};
export const CartComponent = ({ cart }: CartComponentProps) => {
  const { totalCart, calculateTotalCart } = useCart();
  const bottomMessage: string = 'Realizar pedido';
  useEffect(() => {
    calculateTotalCart();
  });
  return (
    <View className="flex-1">
      <ScrollView
        className="w-full p-4 flex-1 "
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <Text className="text-center text-2xl font-bold">Tus productos</Text>

        {cart.map((item, index) => (
          <View key={item.product.id}>
            <CartItemComponent item={item} />
            {index != cart.length - 1 && (
              <View className="w-full bg-black" style={{ height: 1 }}></View>
            )}
          </View>
        ))}
      </ScrollView>
      <BottomPriceComponent message={bottomMessage} price={totalCart} />
    </View>
  );
};
