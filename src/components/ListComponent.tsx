import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

type ListComponentProps = {
  title: string;
  data: Array<{ id: string; name: string; image: string; price: string }>;
  loading: boolean;
};

export const ListComponent: React.FC<ListComponentProps> = ({
  title,
  data,
  loading,
}) => {
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-primary font-bold text-lg">Cargando...</Text>
      </View>
    );
  }

  if (!data || data.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-primary font-bold text-lg">
          No hay datos disponibles
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-secondary">
      <Text className="text-primary text-xl font-bold text-center mb-4">
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-tertiary rounded-lg p-4 m-2 flex-1 items-center">
            <Image
              source={{ uri: item.image }}
              className="w-24 h-24 rounded-lg mb-2"
            />
            <Text className="text-primary font-bold">{item.name}</Text>
            <Text className="text-primary font-bold">{item.price}</Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};
