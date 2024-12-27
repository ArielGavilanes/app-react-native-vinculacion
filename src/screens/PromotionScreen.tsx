import React, { useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { PromotionCard } from '../components/PromotionCard';
import { useFirestore } from '../hooks/useFirestore';
import { COLLECTIONS } from '../enum/collections';
import { PromotionI } from '../interfaces/PromotionI';
import { colors } from '../utils/colors';

export const PromotionScreen = () => {
  const { data, fetchData, loading } = useFirestore(COLLECTIONS.PROMOTIONS);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  // Filtrar y castear los datos específicamente como promociones
  const promotions = data as PromotionI[] | null;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.tertiary, padding: 16 }}>
      {promotions &&
        promotions.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            promotion={promotion}
            onApply={() => console.log(`Aplicando promoción: ${promotion.name}`)}
          />
        ))}
    </ScrollView>
  );
};
