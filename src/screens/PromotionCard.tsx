import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Variables para textos reutilizables
const BUTTON_TEXT = 'APLICAR';
// Interfaz para las propiedades de la tarjeta
interface PromotionCardProps {
  code: string;
  discount: string;
  validity: string;
  minValue: number;
  onApply: () => void;
}

// Componente de tarjeta de promoción
export const PromotionCard: React.FC<PromotionCardProps> = ({
  code,
  discount,
  validity,
  minValue,
  onApply,
}) => {
  return (
    <View className="bg-white rounded-lg shadow p-4 mb-4">
      <Text className="text-lg font-bold">{code}</Text>
      <Text className="text-sm text-gray-700">
        Descuento del {discount} de tu compra
      </Text>
      <Text className="text-sm text-gray-500">Validez: {validity}</Text>
      <Text className="text-sm text-gray-500">
        Valor mínimo de compra: ${minValue.toFixed(2)}
      </Text>
      <TouchableOpacity
        className="bg-purple-500 rounded-md mt-4 py-2 px-4"
        onPress={onApply}
      >
        <Text className="text-white text-center font-semibold">
          {BUTTON_TEXT}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
