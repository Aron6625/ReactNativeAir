import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Main from './src/Main';

export default function App() {
  return (
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 60, 
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
