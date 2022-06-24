import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainArticuloView from './MainProductosView';

const Tab = createBottomTabNavigator();
//vistas

const Main = (props) => {
    return ( <Tab.Navigator>
        <Tab.Screen name="MainArticuloView" component = { MainArticuloView } />
        
      </Tab.Navigator>);
}

export { Main }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        width: "100%",
        padding: 20,
        margin: 10
    }, Title: {
        color: "#fff",
        fontSize: 26
    }
});
