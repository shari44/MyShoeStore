import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ArticulosView } from './ArticulosView';
import { NewArticulo } from './NewArticulo';
import { CategoriasView } from './CategoriasView';

const Stack = createNativeStackNavigator();
//Views 

export default function MainArticuloView() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ArticulosView" component={ArticulosView}  />
        <Stack.Screen name="NewArticulo" component={NewArticulo}  />
        <Stack.Screen name="CategoriasView" component={CategoriasView}  />

      </Stack.Navigator>
  );
}