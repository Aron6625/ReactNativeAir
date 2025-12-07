import { Text, StyleSheet, Image} from "react-native"
import { SafeAreaProvider ,SafeAreaView} from "react-native-safe-area-context";
import TextComponent from "../components/TextComponent";
import { NavigationProp } from "@react-navigation/native";
import { RootNavigationParamList } from "../routes/AppNavigation";
type Props = {
  navigation: NavigationProp<RootNavigationParamList>;
}
const WelcomenScreen = ({navigation}: Props) => {
  const HandlePress = () => {
    navigation.navigate('EventScreen',{
          name: "Aron",
          age: 30,
          course: "React Native", 
          test: "esto es una prueba",
        });
  }
  return (
    <SafeAreaProvider style={styles.container}>
      
      <SafeAreaView>

        <TextComponent size="16" weight="semibold" color="dark">biegkjknvenido
            <TextComponent  size="24" weight="light" color="primary" textAlign="right" underline={true}
            onPress={ () => console.log('test')} >
                hola mundo</TextComponent>
            <TextComponent  
              size="16" 
              weight="light" 
              textAlign="right"
              
              color="secondary"
              underline={true}
              onPress={ HandlePress} >
                  Ingresar a Event Screen 
            </TextComponent>

        </TextComponent>
        <Image
        style={{width: 200, height: 200}}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}>
        </Image>
      </SafeAreaView>

    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  text: {
    color: 'blue',
    fontSize: 60, 
    textAlign: 'center',
    fontWeight: '600',
  },
  textNegrilla: {
    fontWeight: 'bold',
    fontSize: 60,
  }
});

export default WelcomenScreen