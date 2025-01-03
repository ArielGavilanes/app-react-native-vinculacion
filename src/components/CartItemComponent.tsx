import { View, Image, Text } from 'react-native';
import { CartItemI } from '../interfaces/CartItemI';
import { useCart } from '../context/CartContext';
import { CircularButton } from './CircularButton';

type CartItemComponentProps = {
  item: CartItemI;
};
export const CartItemComponent = ({ item }: CartItemComponentProps) => {
  const { removeProduct, increaseQuantity, decreaseQuantity } = useCart();
  return (
    <View className="p-4 flex-row w-full mb-2 ">
      <View className="justify-center">
        <Image
          className="w-28 h-28 overflow-hidden "
          source={{ uri: item.product.image }}
        />
      </View>
      <View className="flex-1 ml-2 mr-2 ">
        <Text className="text-xl font-semibold">{item.product.name}</Text>
        <Text className="text-lg font-normal">${item.totalProduct}</Text>
        <View className="flex-row w-full p-1 mt-4">
          <View className="items-center justify-center">
            <CircularButton
              action={() => decreaseQuantity(item.product.id)}
              icon="remove"
            />
          </View>
          <View className="w-8 items-center justify-center">
            <Text>{item.quantity}</Text>
          </View>
          <View>
            <CircularButton
              action={() => increaseQuantity(item.product.id)}
              icon="add"
            />
          </View>
        </View>
      </View>
      <View className="items-center justify-center">
        <CircularButton
          action={() => removeProduct(item.product.id)}
          icon="trash"
        />
      </View>
    </View>
  );
};
