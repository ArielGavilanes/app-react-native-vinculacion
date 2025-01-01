import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { CartScreenScreenNavigationProp } from '../types/NavigationProps';

export const EmptyCartComponent = () => {
  const navigation = useNavigation<CartScreenScreenNavigationProp>();
  const emptyCartMessage: string = 'Tu carrito esta vacio';
  const catalogueButtonMessage: string = 'Mirar catalogo';
  const goToCatalogueScreen = () => navigation.navigate('Catalogue');

  return (
    <View className="items-center justify-center flex-1">
      <Ionicons name="cart-outline" size={200} color="black" />
      <Text className="text-5xl font-bold w-full text-center pl-8 pr-8">
        {emptyCartMessage}
      </Text>
      <View className="w-full pl-8 pr-8 mt-6">
        <TouchableOpacity
          className="p-6 rounded-lg"
          style={styles.button}
          onPress={goToCatalogueScreen}
        >
          <Text className="text-3xl text-white font-semibold text-center">
            {catalogueButtonMessage}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
});
