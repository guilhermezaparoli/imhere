import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from "../../components/Participant";

export function Home() {

  function handleParticipantAdd(){
    console.log("aqe")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>

      <TextInput
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        style={styles.input}
        />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
        </View>

        <Participant name="teste"/>
        <Participant name="teste2"/>
        <Participant name="teste3"/>
    </View>
  );
}
