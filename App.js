import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as página da aplicação
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Dados from './src/pages/Dados';
import Formacao from './src/pages/Formacao';
import Habilidades from './src/pages/Habilidades';
import Experiencia_profissional from './src/pages/Experiencia_profissional';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Habilidades" component={Habilidades} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Dados" component={Dados} />
        <Stack.Screen name="Experiencia profissional" component={Experiencia_profissional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}