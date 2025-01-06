import { ActivityIndicator, View } from 'react-native';
import { CategoryListComponent } from '../components/CategoryListComponent';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { COLLECTIONS } from '../enum/collections';
import { CategoryI } from '../interfaces/CategoryI';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

export const CatalogueScreen = () => {
  const { data, fetchData, loading } = useFirestore(COLLECTIONS.CATEGORIES);
  const [categories, setCategories] = useState<CategoryI[]>([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Catalogo',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerLeft: () => null,
    });
  }, [navigation]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const filteredData = data as CategoryI[];
      setCategories(filteredData);
    }
  }, [data]);

  return (
    <View className="flex-1">
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          className="justify-center items-center mt-2"
        />
      ) : (
        <CategoryListComponent categories={categories} />
      )}
    </View>
  );
};
