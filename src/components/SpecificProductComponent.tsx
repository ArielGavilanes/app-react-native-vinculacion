import { View, Image, StyleSheet, Text } from 'react-native';
import { ProductI } from '../interfaces/ProductI';
import { BottomPriceComponent } from './BottomPriceComponent';
import { colors } from '../utils/colors';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { SingleProductScreenNavigationProp } from '../types/NavigationProps';

type SpecificProductComponentProps = {
  product: ProductI;
};

export const SpecificProductComponent = ({
  product,
}: SpecificProductComponentProps) => {
  const message: string = 'Añadir al carrito';
  const { addProduct } = useCart();
  const navigation = useNavigation<SingleProductScreenNavigationProp>();
  return (
    <View className="flex-1">
      <View className="items-center justify-center p-4">
        <Image
          source={{ uri: product?.image }}
          className="h-96 w-96 rounded-lg"
          style={styles.image}
        />
      </View>
      <View className="p-4">
        <Text className="text-4xl font-bold">{product?.name}</Text>
      </View>
      <View className="items-end justify-end flex-1">
        <BottomPriceComponent
          message={message}
          price={product?.price}
          action={() => {
            addProduct(product);
            navigation.navigate('Tabs', { screen: 'Cart' });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
});
