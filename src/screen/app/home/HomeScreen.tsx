import { View, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import CategoryList from './components/CategoryList'
import ProductsList from '../products/components/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@app/store/store';
import { fetchProducts } from '@app/store/slices/products/products.thunks'

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [categoryActive, setCategoryActive] = React.useState<any>(null);
    const {products, isLoading} = useSelector(
        (state: RootState) => state.products
    );
    console.log('🧪 PRODUCTS FROM STORE:', products);
    useEffect(() =>{
        dispatch(fetchProducts());
    }, []);
  return (
      <View style={styles.container}>
        <CategoryList
            categoryActive={categoryActive}
            onSelect={setCategoryActive}
        />
        <ProductsList
            products={products}
        />
      </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryContainer: {
        marginTop: 20,
    },
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    }

})