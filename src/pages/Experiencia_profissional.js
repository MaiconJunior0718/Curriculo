import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Dados() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiencia profissional</Text>
      <Text style={styles.text}><span style={styles.titulo_trabalho}>Marcearia do Bigatão:</span>  <p style={styles.paragrafo}> <span style={styles.negrito}>Funções:</span> Operador de caixa, balconista, vendedor, encarregado de estoque, repositor de mercadorias, entregador, empacotador, auxiliar de limpeza e ajudante geral. (03-2022 / 08-2022)</p></Text>
      <Text style={styles.text}><span style={styles.titulo_trabalho}>Tecnobrother Informatica: </span> <p style={styles.paragrafo}> <span style={styles.negrito}>Funções:</span> Manutenção e reparo de computadores, notebook e impressoras, instalação de cameras e rotiadores. (Atual)</p></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 80,
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
      fontSize: 16,
      color: '#FFFFFF',
    },

    negrito:{
      fontWeight: 'bold',
    },

    paragrafo:{
      marginLeft: 20,
    },

    titulo_trabalho:{
      fontWeight: 'bold',
      fontSize: '15pt'
    },
  });
