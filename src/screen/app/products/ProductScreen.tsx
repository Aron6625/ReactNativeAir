import React, { useState } from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import ProductsList from './components/ProductList';
import AddProductModal from './components/AddProductModal';

export default function ProductsScreen() {
  const products = useSelector((state: RootState) => state.products.products);
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Productos</Text>
      <ProductsList products={products} />
      <TouchableOpacity style={styles.fab} onPress={() => setOpen(true)}>
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
      <AddProductModal visible={open} onClose={() => setOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  title: { fontSize: 22, fontWeight: 'bold', padding: 16 },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    backgroundColor: '#1976D2',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  fabText: { color: '#fff', fontSize: 28 },
});
