import { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ProductI } from '../interfaces/ProductI';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/db';
import { COLLECTIONS } from '../enum/collections';
import { ProductByCategoryRouteProp } from '../types/NavigationProps';
import { useFirestore } from '../hooks/useFirestore';
import { CategoryI } from '../interfaces/CategoryI';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import { ProductListComponent } from '../components/ProductListComponent';

type ProductByCategoryScreenProps = {
  route: ProductByCategoryRouteProp;
};

export const ProductByCategoryScreen = ({
  route,
}: ProductByCategoryScreenProps) => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryI | null>(null);
  const {
    specificData,
    fetchDataById,
    loading: loadingCategories,
  } = useFirestore(COLLECTIONS.CATEGORIES);
  const { categoryId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    fetchDataById(categoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (specificData) {
      const category = specificData as CategoryI;
      setCategory(category);
    }
  }, [specificData]);

  useEffect(() => {
    const fetchProductByCategory = async (categoryId: string) => {
      setLoading(true);
      const productsRef = collection(db, COLLECTIONS.PRODUCTS);
      const q = query(productsRef, where('category_id', '==', categoryId));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        const product: ProductI = {
          id: doc.id,
          name: productData.name,
          price: productData.price,
          image: productData.image,
          category_id: productData.category_id,
        };
        setProducts((prevProducts) => [...prevProducts, product]);
        setLoading(false);
      });
    };

    fetchProductByCategory(categoryId);
  }, [categoryId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: loadingCategories ? 'Cargando...' : category?.name,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    });
  }, [category, loadingCategories, navigation]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          className="justify-center items-center mt-2"
        />
      ) : (
        <ProductListComponent products={products} />
      )}
    </View>
  );
};
