import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { colors } from '../utils/colors';
import { RootStackParamList } from '../types/RoutingTypes';

const BUTTON_SERVICES = 'Servicios';
const BUTTON_PRODUCTS = 'Productos';

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Inicio',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.tertiary,
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <ImageBackground
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      source={require('../../assets/home.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View className="flex-1 justify-end items-center pb-12">
        <View className="flex-row mt-5">
          <TouchableOpacity
            className="bg-primary py-4 px-8 rounded-lg mx-2"
            onPress={() => navigation.navigate('Services')}
          >
            <Text className="text-tertiary font-bold text-lg text-center">
              {BUTTON_SERVICES}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary py-4 px-8 rounded-lg mx-2"
            onPress={() => navigation.navigate('Products')}
          >
            <Text className="text-tertiary font-bold text-lg text-center">
              {BUTTON_PRODUCTS}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
