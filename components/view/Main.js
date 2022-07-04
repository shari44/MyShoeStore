import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainArticuloView from './MainArticulosView';

const Tab = createBottomTabNavigator();
//vistas

const Main = (props) => {
    return ( <Tab.Navigator>
        <Tab.Screen name="Articulos" component = { MainArticuloView } />
        
      </Tab.Navigator>);
}

export { Main }