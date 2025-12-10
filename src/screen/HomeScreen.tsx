import { View, Text,ScrollView, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React, { use, useEffect } from 'react'
import CategoryButton from '../components/CategoryButton'
import TextComponent from '../components/TextComponent'
import { categories } from '../assets/data/categories'
import { movies } from '../assets/data/movies'
import MovieCard from '../components/MovieCard'
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook'
import { getCategoriesService } from '../store/slices/categories'

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(state => state.category);
  const [categoryActive, setCategoryActive] = React.useState<any>(null);
  console.log("Categorias desde RED UX:", category);
  useEffect(()=> {
    // getCategoriesService();
    dispatch(getCategoriesService());
  }, []);
//   useEffect(() => {
//     console.log("Categorias desde REDUX:", category);
//   }, [category]);

  return (
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TextComponent size='18' textAlign='left' style={{ paddingLeft: 10 }}  >Categorias</TextComponent>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                style={{padding: 10}}>
                {categories.map((category) =>
                    <CategoryButton 
                        key={category.id}
                        color={category.color}
                        icon={category.icon}
                        name={category.name}
                        isActive={category.id === categoryActive?.id}
                        onPress={() => {
                            setCategoryActive(category)
                        }}
                    />
                )}
            </ScrollView>
        </View>
        {/* <TouchableOpacity> */}
            <ScrollView>
                <View style={styles.containerCard}>
                    {movies.map((item) => (
                    <MovieCard 
                        key={item.id}
                        item={item}
                        onPress={() => console.log(item.name)}
                    />
                    ))}
                </View>
            </ScrollView>   
        {/* </TouchableOpacity> */} 
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