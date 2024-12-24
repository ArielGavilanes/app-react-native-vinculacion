import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const productsData = [
  { id: '1', name: 'Producto 1', description: 'Descripción del producto 1', price: '$30', image: 'https://via.placeholder.com/150/FF5733' },
  { id: '2', name: 'Producto 2', description: 'Descripción del producto 2', price: '$40', image: 'https://via.placeholder.com/150/33FF57' },
  { id: '3', name: 'Producto 3', description: 'Descripción del producto 3', price: '$50', image: 'https://via.placeholder.com/150/5733FF' },
];

const servicesData = [
  { id: '1', name: 'Servicio 1', description: 'Descripción del servicio 1', price: '$100', image: 'https://via.placeholder.com/150/FFC300' },
  { id: '2', name: 'Servicio 2', description: 'Descripción del servicio 2', price: '$200', image: 'https://via.placeholder.com/150/DAF7A6' },
  { id: '3', name: 'Servicio 3', description: 'Descripción del servicio 3', price: '$300', image: 'https://via.placeholder.com/150/C70039' },
];

const offersData = [
  { id: '1', name: 'Oferta 1', description: 'Descripción de la oferta 1', price: '$20', image: 'https://via.placeholder.com/150/900C3F' },
  { id: '2', name: 'Oferta 2', description: 'Descripción de la oferta 2', price: '$15', image: 'https://via.placeholder.com/150/581845' },
  { id: '3', name: 'Oferta 3', description: 'Descripción de la oferta 3', price: '$10', image: 'https://via.placeholder.com/150/FF5733' },
];

export const CatalogueScreen = () => {
  const renderCard = ({ item }: any) => {
    console.log(item);
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CATÁLOGO</Text>

      <TextInput style={styles.searchBar} placeholder="Buscar ....." />

      <View style={styles.filterContainer}>
        {['Todos', 'Productos', 'Servicios', 'Ofertas'].map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Productos Destacados</Text>
      <FlatList
        data={productsData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Servicios Destacados</Text>
      <FlatList
        data={servicesData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />

      <Text style={styles.sectionTitle}>Ofertas</Text>
      <FlatList
        data={offersData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  filterText: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  list: {
    marginBottom: 20,
  },
  card: {
    padding: 15, // Incrementa el padding
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginBottom: 5,
    flexWrap: 'wrap', // Asegura que el texto se ajuste
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
