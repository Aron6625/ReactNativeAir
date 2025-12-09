import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent';

type Props = {
    item: any;
    onPress: () => void;
}

const MovieCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={Style.card}
        >
      <View>
        <Image 
            source={{uri: item.poster }} 
            style={Style.image}
        />
        <View style={Style.textDetail}>
          <TextComponent color='white'>{item.releaseYear}</TextComponent>
          <TextComponent color='white'>{item.rating}</TextComponent>
        </View>
      </View>
      <View style={Style.textContainerCard}> 
        <TextComponent>{item.name}</TextComponent>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard

const Style = StyleSheet.create({
    card: {
        width: "30%",
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 5,
        gap: 5,
    },
    image: {
        width: '100%',
        height: 145.92,
        borderRadius: 24,
        alignContent: 'center',
    },
    textContainerCard: {
        paddingHorizontal: 5,
        paddingBottom: 10,
    },
    textDetail: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 10,
    }
    
});