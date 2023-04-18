import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

           <View style={styles.sobre}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
        </View> 


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formacao')}>
        <Text style={styles.buttonText}>Formação</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dados')}>
        <Text style={styles.buttonText}>Dados</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Habilidades')}>
        <Text style={styles.buttonText}>Habilidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Experiencia profissional')}>
        <Text style={styles.buttonText}>Experiencia profissional</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    flexDirection: "row",
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: '#514CBD',
    borderRadius: 4,
    padding: 12,
    marginTop: 20,
    textAlign: "center",
    height: 50,
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    whidth:200,
    reight:100,
  },
});
