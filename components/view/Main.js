import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreensView from './ScreensView';
import { VentasView } from './VentasView';

const Tab = createBottomTabNavigator();
//vistas

const Main = (props) => {
    return ( <Tab.Navigator>
        <Tab.Screen name="Articulos" component = { ScreensView } />
        <Tab.Screen name="VentasView" component = { VentasView } />
        
      </Tab.Navigator>);
}

export { Main }