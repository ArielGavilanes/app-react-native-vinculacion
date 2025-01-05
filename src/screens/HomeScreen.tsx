import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { colors } from '../utils/colors';

const BUTTON_TEXT = 'IR A VER';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Inicio',
      headerStyle: { backgroundColor: colors.secondary },
      headerTintColor: colors.tertiary,
      headerLeft: () => null,
    });
  }, [navigation]);

  const openExternalUrl = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error('URL no soportada:', url);
      }
    } catch (error: unknown) {
      console.error('Error al abrir la URL:', error);
    }
  };

  return (
    <ImageBackground
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      source={require('../../assets/home2.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 justify-end pb-8">
        <View className="flex-row justify-around mb-4">
          {/* Tarjeta Productos */}
          <View className="bg-white rounded-lg p-3 items-center w-2/5 shadow-lg">
            <Image
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              source={require('../../assets/productos.png')}
              className="w-16 h-16 mb-2"
            />
            <Text className="text-lg font-bold text-center mb-2">
              PRODUCTOS
            </Text>
            <Text className="text-sm text-gray-600 text-center mb-3">
              Disfruta de los productos que tenemos para ti
            </Text>
            <TouchableOpacity
              className="bg-purple-300 rounded-full py-2 px-3"
              onPress={() => openExternalUrl('https://expo.dev/')}
            >
              <Text className="text-black font-bold text-center">
                {BUTTON_TEXT}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tarjeta Servicios */}
          <View className="bg-white rounded-lg p-3 items-center w-2/5 shadow-lg">
            <Image
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              source={require('../../assets/servicios.png')}
              className="w-16 h-16 mb-2"
            />
            <Text className="text-lg font-bold text-center mb-2">
              SERVICIOS
            </Text>
            <Text className="text-sm text-gray-600 text-center mb-3">
              Disfruta de los servicios que tenemos para ti
            </Text>
            <TouchableOpacity
              className="bg-purple-300 rounded-full py-2 px-3"
              onPress={() => openExternalUrl('https://example.com/academy')}
            >
              <Text className="text-black font-bold text-center">
                {BUTTON_TEXT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
