import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { CartItemI } from '../interfaces/CartItemI';
import { CartItemComponent } from './CartItemComponent';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { BottomPriceComponent } from './BottomPriceComponent';
import { ScreenTitleComponent } from './ScreenTitleComponent';
import { colors } from '../utils/colors';

type CartComponentProps = {
  cart: CartItemI[];
};
export const CartComponent = ({ cart }: CartComponentProps) => {
  const { totalCart, calculateTotalCart, clearCart } = useCart();
  const bottomMessage: string = 'Realizar pedido';
  const title: string = 'Tu carrito';
  useEffect(() => {
    calculateTotalCart();
  });
  return (
    <View className="flex-1">
      <ScreenTitleComponent title={title} />
      <ScrollView
        className="w-full p-4 flex-1 "
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {cart.map((item, index) => (
          <View key={item.product.id}>
            <CartItemComponent item={item} />
            {index != cart.length - 1 && (
              <View className="w-full bg-black" style={{ height: 1 }}></View>
            )}
          </View>
        ))}
        <TouchableOpacity
          style={styles.button}
          className="p-4 rounded-lg w-40 justify-center items-center"
          onPress={() => {
            clearCart();
          }}
        >
          <Text className="text-center text-lg text-white font-semibold">
            Vaciar carrito
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomPriceComponent message={bottomMessage} price={totalCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.quaterary,
  },
});
