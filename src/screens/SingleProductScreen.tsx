import { ActivityIndicator, View } from 'react-native';
import { SpecificProductComponent } from '../components/SpecificProductComponent';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { colors } from '../utils/colors';
import { SingleProductRouteProp } from '../types/NavigationProps';
import { COLLECTIONS } from '../enum/collections';
import { ProductI } from '../interfaces/ProductI';
import { useFirestore } from '../hooks/useFirestore';

type SingleProductScreenProps = {
  route: SingleProductRouteProp;
};

export const SingleProductScreen = ({ route }: SingleProductScreenProps) => {
  const navigation = useNavigation();
  const { productId } = route.params;
  const [product, setProduct] = useState<ProductI>({
    id: '',
    name: '',
    price: 0,
    image: '',
    category_id: '',
  });
  const { specificData, fetchDataById, loading } = useFirestore(
    COLLECTIONS.PRODUCTS,
  );

  useEffect(() => {
    fetchDataById(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (specificData) {
      const product = specificData as ProductI;
      setProduct(product);
    }
  }, [specificData]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loading ? 'Cargando...' : product?.name,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    });
  }, [loading, navigation, product]);

  return (
    <View className="flex-1">
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          className="justify-center items-center mt-2"
        />
      ) : (
        <SpecificProductComponent product={product} />
      )}
    </View>
  );
};
