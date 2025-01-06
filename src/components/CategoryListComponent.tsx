import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { CategoryI } from '../interfaces/CategoryI';
import { useNavigation } from '@react-navigation/native';
import { CatalogueScreenScreenNavigationProp } from '../types/NavigationProps';
import { ScreenTitleComponent } from './ScreenTitleComponent';
import { colors } from '../utils/colors';

type CategoryListComponentProps = {
  categories: CategoryI[];
};
export const CategoryListComponent = ({
  categories,
}: CategoryListComponentProps) => {
  const navigation = useNavigation<CatalogueScreenScreenNavigationProp>();
  const title: string = 'Categorias';

  return (
    <View style={styles.wrapper}>
      <ScreenTitleComponent title={title} />
      <ScrollView contentContainerStyle={styles.grid}>
        {categories?.map((category) => (
          <View
            key={category.id}
            style={styles.card}
            className="rounded-lg p-1 h-28 justify-center items-center"
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductsByCategory', {
                  categoryId: category.id,
                })
              }
            >
              <Text className="text-3xl text-white font-bold text-center">
                {category.name}
              </Text>
            </TouchableOpacity>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 275,
  },
  card: {
    backgroundColor: colors.primary,
    marginBottom: 16,
    width: '48%',
    overflow: 'hidden',
  },
});
