import { View } from 'react-native';
import { EmptyCartComponent } from '../components/EmptyCartComponent';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect } from 'react';
import { colors } from '../utils/colors';
import { useCart } from '../context/CartContext';
import { CartComponent } from '../components/CartComponent';
import { ProductI } from '../interfaces/ProductI';

export const CartScreen = () => {
  const navigation = useNavigation();
  const { cart, addProduct } = useCart();
  const product: ProductI = {
    id: 'prod-001',
    name: 'Laptop',
    price: 1500,
    image: 'laptop.jpg',
    category_id: 'cat-001',
  };

  useEffect(() => {
    addProduct(product);
    console.log('cart', cart);
  }, []);

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
