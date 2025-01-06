import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView, ActivityIndicator, View, Alert } from 'react-native';
import { PromotionCard } from '../components/PromotionCard';
import { useFirestore } from '../hooks/useFirestore';
import { COLLECTIONS } from '../enum/collections';
import { PromotionI } from '../interfaces/PromotionI';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { ScreenTitleComponent } from '../components/ScreenTitleComponent';
import { PromotionsScreenNavigationProp } from '../types/NavigationProps';
import { useCart } from '../context/CartContext';

export const PromotionScreen = () => {
  const { applyDiscount, totalCart, appliedDiscount } = useCart();
  const { data, fetchData, loading } = useFirestore(COLLECTIONS.PROMOTIONS);
  const [promotions, setPromotions] = useState<PromotionI[] | null>(null);
  const title = 'Promociones vigentes';
  useEffect(() => {
    fetchData();
  }, []);
  const navigation = useNavigation<PromotionsScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Promociones',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

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
    <View className="flex-1">
      <ScreenTitleComponent title={title} />
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.tertiary, padding: 16 }}
      >
        {promotions && promotions.length > 0 ? (
          promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              promotion={promotion}
              onApply={() => {
                if (appliedDiscount) {
                  Alert.alert(
                    'Promoción aplicada',
                    'Ya tienes una promoción aplicada',
                  );
                  navigation.navigate('Order');
                }
                if (totalCart < promotion.minimum_purchase) {
                  Alert.alert(
                    'Compra mínima',
                    `Debes comprar al menos $${promotion.minimum_purchase} para aplicar esta promoción`,
                  );
                }
                if (totalCart > promotion.minimum_purchase) {
                  applyDiscount(promotion.discount);
                  navigation.navigate('Order');
                }
              }}
            />
          ))
        ) : (
          <ActivityIndicator size="small" color={colors.primary} />
        )}
      </ScrollView>
    </View>
  );
};
