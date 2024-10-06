import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      flex: 1,
      padding: 24,
      marginTop: 48 
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18
    },
    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: "#fdfcfe",
        padding: 10,
        fontSize: 16,
        flex: 1,
        marginRight: 12
    }, 
    buttonText: {
      color: "#FFF",
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    eventDate: {
      color: "#6B6B6B"
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    }
    
  });