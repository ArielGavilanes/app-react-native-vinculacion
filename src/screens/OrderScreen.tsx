import { View } from 'react-native';
import { ScreenTitleComponent } from '../components/ScreenTitleComponent';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { colors } from '../utils/colors';
import { OrderDetailsComponent } from '../components/OrderDetailsComponent';

export const OrderScreen = () => {
  const title: string = 'Resumen de tu pedido';
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Pedido',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);
  return (
    <View className="flex-1">
      <ScreenTitleComponent title={title} />
      <OrderDetailsComponent />
    </View>
  );
};
