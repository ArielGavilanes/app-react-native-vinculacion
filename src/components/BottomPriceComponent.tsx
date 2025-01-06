import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

type BottomPriceComponentProps = {
  message: string;
  price: number | undefined;
  action: () => void;
};

export const BottomPriceComponent = ({
  message,
  price,
  action,
}: BottomPriceComponentProps) => {
  return (
    <View className="w-full bg-white p-4">
      <TouchableOpacity
        className="p-4 rounded-lg "
        style={styles.button}
        onPress={action}
      >
        <View className="flex-row w-full justify-between">
          <View>
            <Text className="text-white text-xl font-semibold">{message}</Text>
          </View>
          <View>
            <Text className="text-white text-xl font-semibold">
              ${price?.toFixed(2)}
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
