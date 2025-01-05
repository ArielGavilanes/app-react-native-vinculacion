import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { PromotionCard } from '../components/PromotionCard';
import { useFirestore } from '../hooks/useFirestore';
import { COLLECTIONS } from '../enum/collections';
import { PromotionI } from '../interfaces/PromotionI';
import { colors } from '../utils/colors';

export const PromotionScreen = () => {
  const { data, fetchData, loading } = useFirestore(COLLECTIONS.PROMOTIONS);
  const [promotions, setPromotions] = useState<PromotionI[] | null>(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const filteredData = data as PromotionI[];
      setPromotions(filteredData);
    }
  }, [data]);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.tertiary, padding: 16 }}
    >
      {promotions &&
        promotions.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            promotion={promotion}
            onApply={() =>
              console.log(`Aplicando promoción: ${promotion.name}`)
            }
          />
        ))}
    </ScrollView>
  );
};
