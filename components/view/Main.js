import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainArticuloView from './MainProductosView';

const Tab = createBottomTabNavigator();
//vistas

const Main = (props) => {
    return ( <Tab.Navigator>
        <Tab.Screen name="Articulos" component = { MainArticuloView } />
        
      </Tab.Navigator>);
}

export { Main }