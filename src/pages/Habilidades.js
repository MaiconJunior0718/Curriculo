import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Habilidades() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <Text style={styles.text}>Front-End.</Text>
      <Text style={styles.text}>Logica de programação.</Text>
      <Text style={styles.text}>Design.</Text>
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
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
