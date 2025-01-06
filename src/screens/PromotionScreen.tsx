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
  }, []);

  useEffect(() => {
    if (data) {
      const filteredData = (data as PromotionI[]).filter((promotion) => {
        const now = new Date();
        const validityDate = promotion.validity.toDate();
        return now < validityDate;
      });
      setPromotions(filteredData);
    }
  }, [data]);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.primary}
        className="justify-center items-center mt-2"
      />
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.tertiary, padding: 16 }}>
      {promotions && promotions.length > 0 ? (
        promotions.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            promotion={promotion}
            onApply={() => console.log(`Aplicando promoción: ${promotion.name}`)}
          />
        ))
      ) : (
        <ActivityIndicator size="small" color={colors.primary} />
      )}
    </ScrollView>
  );
};
