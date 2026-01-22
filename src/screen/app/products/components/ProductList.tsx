import { Product } from '@app/types';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default function ProductsList({products}: {products: Product[]}) {
  const { width } = useWindowDimensions();
  const numColumns = Math.max(1, Math.floor(width / 160));
  const cardWidth = width / numColumns - 12; 

  return (
      <FlatList
        data={products}
        key={numColumns} 
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 6 }}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: cardWidth }]}>
            <Image 
              source={{ 
                uri:  item.imageUrl ?? 'https://core-docs.s3.amazonaws.com/murray_county_central_schools_ar/article/image/large_66f00638-2227-4795-84cc-8cefe4e4fb75.png'
                }} 
                style={styles.image} resizeMode="contain" />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>{item.categorie.name}</Text>
              <Text style={styles.price}>Bs {item.price}</Text>
              <Text style={styles.stock}>Stock: {item.stock}</Text>
            </View>
          </View>
        )}
      />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  title: { fontSize: 22, fontWeight: 'bold', padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100, 
    backgroundColor: '#fafafa',
  },
  info: { padding: 8 },
  name: { fontSize: 14, fontWeight: 'bold' },
  category: { fontSize: 12, color: '#777' },
  price: { fontWeight: 'bold', marginTop: 4 },
  stock: { fontSize: 12, color: '#444' },
});
