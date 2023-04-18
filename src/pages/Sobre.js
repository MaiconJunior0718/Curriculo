import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>Na minha equipe de desenvolvimento, sou responsavel pela criação das paginas front-end, utilizando a linguagem JavaScript, linguagem de marcação: HTML e linguagem de estilos: CSS.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'orange',
      paddingTop: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#FFFFFF',
      
    },
    text: {
      maxWidth: 800,
      textAlign: "center",
      fontSize: 16,
      color: '#FFFFFF',
    },
  });