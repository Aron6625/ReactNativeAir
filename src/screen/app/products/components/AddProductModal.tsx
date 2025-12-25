import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '@app/store/slices/products/product.slice';
import ImagePickerBox from '@app/components/ImagesComponents';

export default function AddProductModal({ visible, onClose }: any) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const resetForm = () => {
    setName('');
    setPrice('');
    setStock('');
    setImage(null);
  };

  const saveProduct = () => {
    if (!name.trim() || !price || !stock) {
        alert('Completa todos los campos');
        return;
    }
    dispatch(
      addProduct({
        id: Date.now(),
        name,
        categoryId: 'General',
        salePrice: Number(price),
        cost: 0,
        stock: Number(stock),
        date: new Date().toISOString(),
        image: image ?? '',
      })
    );
    resetForm();
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>➕ Nuevo Producto</Text>

          <ScrollView>
            <TextInput placeholder="Nombre" style={styles.input} onChangeText={setName} />
            <TextInput placeholder="Precio" keyboardType="numeric" style={styles.input} onChangeText={setPrice} />
            <TextInput placeholder="Stock" keyboardType="numeric" style={styles.input} onChangeText={setStock} />
            <ImagePickerBox image={image} onChange={setImage} />

            <TouchableOpacity style={styles.btn} onPress={saveProduct}>
              <Text style={styles.btnText}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    resetForm();
                    onClose();
                }}
            >
              <Text style={styles.cancel}>Cancelar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: '85%',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#1976D2',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  cancel: { textAlign: 'center', marginTop: 12, color: '#777' },
});
