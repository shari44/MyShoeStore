import { StyleSheet, Text, View, Button } from 'react-native';

const Login = (props) => {
    return (<View style = {styles.container}>
        <View style = {styles.Header}>
            <Text style = {styles.Title}>ShoeStore</Text>
        </View>
        <View style = {styles.Options}>
            <Button title="Iniciar sesion" onPress={() => {
                props.navigation.navigate('Main');                
            }} />
            <Button title="Registrarse" onPress = {() => {
                props.navigation.navigate('Main');                
            }} />
        </View>
    </View>);
}

export { Login }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: "center"
    }, Title: {
        color: "black",
        fontSize: 26,
    }, Header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    }, Options: {
        flex: 3
    }
});
