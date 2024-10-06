import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Ja existe um participante na lista com esse nome.")
    }
    console.log('aqe');

    setParticipants((prev) => [...prev, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
  {
    text: "Nao",
    style: "cancel"
  },
  {
    text: "Sim",
    onPress: () => {
      setParticipants((prev) => prev.filter((item) => item !== name))
      Alert.alert("Deletar usuário", "Usuário deletado!")
    }
  }])
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
          value={participantName}
          onChangeText={(text) => setParticipantName(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

<FlatList data={participants} keyExtractor={(item) => item} renderItem={({item}) => (
 <Participant 
 name={item} 
 onRemove={() => handleParticipantRemove(item)} />

)} showsVerticalScrollIndicator={false} ListEmptyComponent={() => <Text style={styles.listEmptyText}>Nenhum participante adicionado!</Text>} />


    </View>
  );
}
