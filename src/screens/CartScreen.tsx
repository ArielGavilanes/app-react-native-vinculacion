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
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
    category_id: 'cat-001',
  };
  const product1: ProductI = {
    id: 'prod-002',
    name: 'Cocina',
    price: 1500,
    image: 'https://designcenter.masisa.com/img/cocinas-img/img-2.jpg',
    category_id: 'cat-001',
  };
  const product2: ProductI = {
    id: 'prod-003',
    name: 'Mesa',
    price: 1500,
    image:
      'https://kindersariato.com/8018-large_default/mesa-rectangular-de-madera-90-x-60-cm-blanca.jpg',
    category_id: 'cat-001',
  };
  const product3: ProductI = {
    id: 'prod-004',
    name: 'Agua',
    price: 1500,
    image:
      'https://www.fybeca.com/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_FybecaEcuador/default/dw80982d79/images/large/293004-AGUA-SIN-GAS-DASANI-600-ML-BOTELLA.jpg?sw=1000&sh=1000',
    category_id: 'cat-001',
  };
  const product4: ProductI = {
    id: 'prod-005',
    name: 'Taladro',
    price: 1500,
    image:
      'https://kywiec.vtexassets.com/arquivos/ids/172947-800-auto?v=638388536202070000&width=800&height=auto&aspect=true',
    category_id: 'cat-001',
  };

  useEffect(() => {
    addProduct(product);
    addProduct(product1);
    addProduct(product2);
    addProduct(product3);
    addProduct(product4);
    // console.log('cart', cart);
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
