import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import TextComponent from '../components/TextComponent'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import { RootNavigationParamList } from '../routes/AppNavigation';

const EventScreen = ({navigation,route}) => {
  // const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();
  const { name, age, course} = route.params ;
  console.log('Todos los params:', route.params); 
  const handleOnPressButton = () => {
    navigation.navigate('WelcomeScreen');
  }
  useEffect(() =>
  {
    navigation.setOptions({
      title: 'este es mi test de todo'
    })
  }, [])
  return (
    <View>
      <TextComponent textAlign='center'>EventScreen</TextComponent>
      <ButtonComponent
        title='Go Back to Welcome Screen'
        onPress={handleOnPressButton}
      />
      
    </View>
  )
}

export default EventScreen