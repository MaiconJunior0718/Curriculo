import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Dados() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados</Text>
      <Text style={styles.text}><p style={styles.title}>Nome:</p> Maicon Junior da Cruz Ferreira</Text>
      <Text style={styles.text}><p style={styles.title}>Email:</p> maicon997476957@gmail.com</Text>
      <Text style={styles.text}><p style={styles.title}>Endereço:</p> Rua Angelo Genova, 679 - Piacatu, SP</Text>
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
      width: 300,
    },
  });
