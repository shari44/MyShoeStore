import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ArticulosView } from './ArticulosView';
import { NewArticulo } from './NewArticulo';
import { CategoriasView } from './CategoriasView';
import { UsuariosView } from './UsuariosView';
import { NewVentasView } from './NewVentaView';
import { VentasView } from './VentasView';
import { NewDetalleVentaView } from './NewDetalleVentaView';
import { AddArticulosView } from './AddArticuloView';
import { DetalleVentaView } from './DetalleVentaView';

const Stack = createNativeStackNavigator();
//Views 

export default function ScreensView() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ArticulosView" component={ArticulosView}  />
        <Stack.Screen name="NewArticulo" component={NewArticulo}  />
        <Stack.Screen name="CategoriasView" component={CategoriasView}  />
        <Stack.Screen name="UsuariosView" component={UsuariosView}  />
        <Stack.Screen name="VentasView" component={VentasView}  />
        <Stack.Screen name="NewVenta" component={NewVentasView}  />
        <Stack.Screen name="NewDetalleVentaView" component = {NewDetalleVentaView}  />
        <Stack.Screen name="AddArticulosView" component = {AddArticulosView}  />
        <Stack.Screen name="DetalleVentaView" component = {DetalleVentaView}  />

      </Stack.Navigator>
  );
}