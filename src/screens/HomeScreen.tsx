import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { colors } from '../utils/colors';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Inicio',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerLeft: () => null,
    });
  }, [navigation]);

  return <View></View>;
};
