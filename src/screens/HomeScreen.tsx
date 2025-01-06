import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import { openExternalUrl } from '../utils/NavigateToUrl';

export const HomeScreen = () => {
  const BUTTON_TEXT = 'IR A VER';

  const navigation = useNavigation();
  const spaUrl = 'https://skinfortelab.com/';
  const academyUrl = 'https://www.aula.skinfortelab.com/';
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
              Nuestro Spa
            </Text>
            <Text className="text-sm text-gray-600 text-center mb-3">
              Disfruta de los tratamientos que tenemos para ti
            </Text>
            <TouchableOpacity
              className="bg-black rounded-full py-2 px-3"
              onPress={() => openExternalUrl(spaUrl)}
            >
              <Text className="text-white font-bold text-center">
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
              Nuestra Academia
            </Text>
            <Text className="text-sm text-gray-600 text-center mb-3">
              En nuestra academia aprenderas sobre cuidado de la piel
            </Text>
            <TouchableOpacity
              className="bg-black rounded-full py-2 px-3"
              onPress={() => openExternalUrl(academyUrl)}
            >
              <Text className="text-white font-bold text-center">
                {BUTTON_TEXT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
