import { View } from 'react-native';
import { EmptyCartComponent } from '../components/EmptyCartComponent';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { colors } from '../utils/colors';
import { useCart } from '../context/CartContext';
import { CartComponent } from '../components/CartComponent';

export const CartScreen = () => {
  const navigation = useNavigation();
  const { cart } = useCart();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Carrito',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View className="flex-1">
      {cart.length === 0 ? (
        <EmptyCartComponent />
      ) : (
        <CartComponent cart={cart} />
      )}
    </View>
  );
};
