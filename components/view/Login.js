import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Login = (props) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (<View style={styles.CardStyle}>
        <Text style = {styles.Title}>Shoes Roberto Perez</Text>

        <View style = {styles.login}>

            <TextInput style = {styles.input} placeholder = "Usuario" />
            <TextInput style = {styles.input} placeholder = "Contraseña" />
       <View  style = {styles.Button} >
        <Button title = 'Iniciar sesion' onPress={() => {
                props.navigation.navigate('Main');
            }} 
            color = "#f22d44">
       </Button>
       <Separator />
       <Button title = 'Registrarse' onPress={() => {
                props.navigation.navigate('Main');
            }}
            color = "#ad1457">
       </Button>
       </View>
        </View>
        
    </View>);

}

export { Login }

const styles = StyleSheet.create({
    CardStyle: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    Title: {
        marginTop: 85,
        flex: 1,
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#ec4b30"
    },
    input: {
        height: 50,
        margin: 12,
        fontSize: 18,
        padding: 4,
        backgroundColor: '#e0e0e0',
        borderRadius: 4
      },
    login: {
        marginTop: 4,
        flex: 4
    },
    Button: {
        marginTop: 40,
        paddingLeft: 8,
        paddingRight: 8
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
});