import { Text, StyleSheet} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";

const WelcomenScreen = () => (
    <SafeAreaProvider style={styles.container}>
        <Text>biegkjknvenido
            <Text style={styles.textNegrilla} 
            onPress={ () => console.log('test')}>
                hola mundo</Text>
        </Text>
    </SafeAreaProvider>
);
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