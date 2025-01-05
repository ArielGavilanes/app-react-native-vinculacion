import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { colors } from '../utils/colors'; // Importa tu archivo de colores

// Variables externas para los textos de los botones
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
    <View className="flex-1 bg-gray-100 justify-end pb-8">
      <View className="flex-row justify-around mb-4">
        {/* Tarjeta Spa */}
        <View className="bg-white rounded-lg p-4 items-center w-1/2 shadow-lg">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            source={require('../../assets/productos.png')}
            className="w-20 h-20 mb-2"
          />
          <Text className="text-lg font-bold text-center mb-2">PRODUCTOS</Text>
          <Text className="text-sm text-gray-600 text-center mb-3">
            Disfruta de los productos que tenemos para ti
          </Text>
          <TouchableOpacity
            className="bg-purple-300 rounded-full py-2 px-4"
            onPress={() => openExternalUrl('https://example.com/spa')}
          >
            <Text className="text-white font-bold text-center">
              {BUTTON_TEXT}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tarjeta Academia */}
        <View className="bg-white rounded-lg p-4 items-center w-1/2 shadow-lg">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            source={require('../../assets/servicios.png')}
            className="w-20 h-20 mb-2"
          />
          <Text className="text-lg font-bold text-center mb-2">SERVICIOS</Text>
          <Text className="text-sm text-gray-600 text-center mb-3">
            Disfruta de los servicios que tenemos para ti
          </Text>
          <TouchableOpacity
            className="bg-purple-300 rounded-full py-2 px-4"
            onPress={() => openExternalUrl('https://example.com/academy')}
          >
            <Text className="text-white font-bold text-center">
              {BUTTON_TEXT}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
