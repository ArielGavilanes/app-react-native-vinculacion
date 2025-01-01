import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PromotionI } from '../interfaces/PromotionI';
import { colors } from '../utils/colors';

interface PromotionCardProps {
  promotion: PromotionI;
  onApply: () => void;
}

export const PromotionCard = ({ promotion, onApply }: PromotionCardProps) => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Text
        style={{ fontSize: 18, fontWeight: 'bold', color: colors.tertiary }}
      >
        {promotion.name}
      </Text>
      <Text style={{ fontSize: 14, color: colors.tertiary }}>
        {promotion.description}
      </Text>
      <Text style={{ fontSize: 14, color: colors.tertiary }}>
        Descuento: {promotion.discount}%
      </Text>
      <Text style={{ fontSize: 14, color: colors.tertiary }}>
        Compra mínima: ${promotion.minimum_purchase.toFixed(2)}
      </Text>
      <Text style={{ fontSize: 14, color: colors.tertiary }}>
        Validez: {promotion.validity.toDate().toLocaleDateString()}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          borderRadius: 4,
          marginTop: 16,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        onPress={onApply}
      >
        <Text
          style={{
            color: colors.tertiary,
            textAlign: 'center',
            fontWeight: '600',
          }}
        >
          APLICAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};
