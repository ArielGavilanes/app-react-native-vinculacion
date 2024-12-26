import React from 'react';
import { View, ScrollView } from 'react-native';
import { PromotionCard } from './PromotionCard';

// Lista de promociones (datos quemados)
const promotions = [
  {
    id: 1,
    code: "SKINGOFIRST",
    discount: "5%",
    validity: "6 de octubre",
    minValue: 6.0,
  },
  {
    id: 2,
    code: "SKINLAB",
    discount: "10%",
    validity: "12 de febrero",
    minValue: 12.0,
  },
];


export const PromotionScreen = () => {
  const handleApplyPromotion = (code: string) => {
    console.log(`Promoción aplicada: ${code}`);
    // Implementar la lógica para aplicar la promoción al carrito
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {promotions.map((promo) => (
        <PromotionCard
          key={promo.id}
          code={promo.code}
          discount={promo.discount}
          validity={promo.validity}
          minValue={promo.minValue}
          onApply={() => handleApplyPromotion(promo.code)}
        />
      ))}
    </ScrollView>
  );
};
