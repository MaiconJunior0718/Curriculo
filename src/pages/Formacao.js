import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação</Text>
      <Text style={styles.text}>Tecnologo em Automação Industrial - (IFSP - Birigui) - Terminado</Text>
      <Text style={styles.text}>Informatica basica - (Microway  - Piacatu) - Terminado</Text>
      <Text style={styles.text}>Design - (Microway  - Piacatu) - Terminado</Text>
      <Text style={styles.text}>Tecnologo em Desenvolvimento de Sistemas - (ETEC Manoel Bento da Cruz - Araçatuba) - Cursando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
    
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

