import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { BottomPriceComponent } from './BottomPriceComponent';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { CartScreenNavigationProp } from '../types/NavigationProps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buildCartMessage } from '../utils/BuildCartMessage';
import * as WebBrowser from 'expo-web-browser';
import { useFirestore } from '../hooks/useFirestore';
import { COLLECTIONS } from '../enum/collections';
import { ContactI } from '../interfaces/ContactI';

export const OrderDetailsComponent = () => {
  const {
    appliedDiscountQuantity,
    appliedDiscount,
    totalCart,
    saveShippingCost,
    shippingCost,
    subtotal,
    finishOrder,
    cart,
  } = useCart();
  const subTotalMessage = 'Subtotal';
  const discountMessage = 'Descuento aplicado';
  const shippingMessage = 'Costo de envío';
  const shippingOptions = 'Opciones de envío';
  const shippingLocation = 'Envio dentro de Quito';
  const message: string = 'Realizar pedido';
  const navigation = useNavigation<CartScreenNavigationProp>();
  const { fetchDataById, specificData } = useFirestore(COLLECTIONS.CONTACT);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [contact, setContact] = useState<ContactI | null>(null);
  const [orderTotalCart, setOrderTotalCart] = useState<number>(totalCart);

  const whatsappMessage = async (
    phone: string | undefined,
    message: string,
  ) => {
    const url = `https://wa.me/${phone}/?text=${encodeURIComponent(message)}`;
    await WebBrowser.openBrowserAsync(url);
  };

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);
    saveShippingCost(newCheckedValue ? 3.4 : 4.2);
    setOrderTotalCart(newCheckedValue ? totalCart + 3.4 : totalCart + 4.2);
  };

  useEffect(() => {
    setOrderTotalCart(totalCart + shippingCost);
    saveShippingCost(isChecked ? 3.4 : 4.2);
  }, [isChecked, saveShippingCost, shippingCost, totalCart]);

  useEffect(() => {
    fetchDataById('QPQyapJyciFM7fgK58kQ');
  }, [fetchDataById]);

  useEffect(() => {
    if (specificData) {
      setContact(specificData as ContactI);
    }
  }, [specificData]);

  return (
    <View className="flex-1">
      <View className="flex-row w-full justify-between pl-4 pr-4 mb-2">
        <View>
          <Text className="text-black text-xl font-semibold">
            {subTotalMessage}
          </Text>
        </View>
        <View>
          <Text className="text-black text-xl font-normal">
            ${subtotal.toFixed(2)}
          </Text>
        </View>
      </View>
      <View className="flex-row w-full justify-between pl-4 pr-4 mb-2">
        <View>
          <Text className="text-black text-xl font-semibold">
            {discountMessage}
          </Text>
        </View>
        <View>
          <Text className="text-black text-xl font-normal">
            ${appliedDiscountQuantity.toFixed(2)}
          </Text>
        </View>
      </View>
      <View className="flex-row w-full justify-between pl-4 pr-4">
        <View>
          <Text className="text-black text-xl font-semibold">
            {shippingMessage}
          </Text>
        </View>
        <View>
          <Text className="text-black text-xl font-normal">
            ${shippingCost.toFixed(2)}
          </Text>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-2xl font-bold">{shippingOptions}</Text>
      </View>
      <View className="flex-row w-full justify-between pl-4 pr-4">
        <View>
          <Text className="text-black text-xl font-semibold">
            {shippingLocation}
          </Text>
        </View>
        <View>
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={handleCheckboxChange}
            color="black"
          />
        </View>
      </View>
      {!appliedDiscount ? (
        <View className="justify-center items-center mt-2">
          <TouchableOpacity
            style={styles.button}
            className="p-4 rounded-lg w-44"
            onPress={() => {
              navigation.navigate('Promotion');
            }}
          >
            <Text className="text-center text-lg font-semibold text-white">
              Aplicar descuento
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="pr-4 pl-4 w-44 mt-2 items-center justify-center">
          <View
            className="flex-row w-full p-4 rounded-lg items-center justify-center"
            style={styles.button}
          >
            <View>
              <Text className="text-lg text-white font-bold">
                Descuento aplicado{' '}
              </Text>
            </View>
            <View>
              <Ionicons name="checkmark" size={22} color="white" />
            </View>
          </View>
        </View>
      )}
      <View className="items-end justify-end flex-1">
        <BottomPriceComponent
          message={message}
          price={orderTotalCart}
          action={() => {
            whatsappMessage(
              contact?.phone_number,
              buildCartMessage(
                cart,
                appliedDiscountQuantity,
                shippingCost,
                subtotal,
                orderTotalCart,
              ),
            );
            navigation.navigate('Tabs', { screen: 'Cart' });
            finishOrder();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.quaterary,
  },
});
