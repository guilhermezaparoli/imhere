import { Text, TextInput, View } from 'react-native';
import {styles} from "./styles"

export function Home() {
  return (

    <View style={styles.container}>
      <Text style={styles.text}>testeee</Text>
      <TextInput placeholder="Nome do participante" placeholderTextColor="#6b6b6b"  style={styles.input}/>
    </View>

  );
}