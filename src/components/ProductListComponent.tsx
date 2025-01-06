import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ProductI } from '../interfaces/ProductI';
import { useNavigation } from '@react-navigation/native';
import { ProductsByCategoryScreenNavigationProp } from '../types/NavigationProps';
import { colors } from '../utils/colors';

type ProductListComponentProps = {
  products: ProductI[];
};
export const ProductListComponent = ({
  products,
}: ProductListComponentProps) => {
  const navigation = useNavigation<ProductsByCategoryScreenNavigationProp>();

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.grid} className="mt-3">
        {products?.map((product) => (
          <View key={product.id} style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SingleProduct', {
                  productId: product.id,
                })
              }
            >
              <Image source={{ uri: product.image }} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.name}>{product.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
    marginLeft: 8,
  },
  searchQuery: {
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 275,
  },
  card: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginBottom: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  name: {
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    borderTopWidth: 1,
    borderTopColor: colors.primary,
  },
});
