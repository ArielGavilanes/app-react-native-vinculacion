import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

type BottomPriceComponentProps = {
  message: string;
  price: number;
};

export const BottomPriceComponent = ({
  message,
  price,
}: BottomPriceComponentProps) => {
  return (
    <View className="w-full bg-white p-4">
      <TouchableOpacity className="p-4 rounded-lg " style={styles.button}>
        <View className="flex-row w-full justify-between">
          <View>
            <Text className="text-white text-xl font-semibold">{message}</Text>
          </View>
          <View>
            <Text className="text-white text-xl font-semibold">
              ${price.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
});
