import { View, Text,ScrollView, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import CategoryButton from '../components/CategoryButton'
import TextComponent from '../components/TextComponent'
import { categories } from '../assets/data/categories'
import { movies } from '../assets/data/movies'
import MovieCard from '../components/MovieCard'

const HomeScreen = () => {
    const [categoryActive, setCategoryActive] = React.useState<any>(null);
  return (
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TextComponent size='18' textAlign='left'>Categorias</TextComponent>
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