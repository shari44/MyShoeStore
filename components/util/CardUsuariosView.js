import { StyleSheet, Text, Button, View,TouchableOpacity } from 'react-native';

const CardUsuariosView = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Usuario: {props.data.nombre_usu}</Text>
        <Text style = {styles.Atribute}>Estado: {props.data.estado}</Text>

        <Button color = "#f22d44" title="Seleccionar" onPress={() => {
                props.UserVendedor(props.data.id_usuario, props.data.nombre_usu);
            }} />

    </View>);
}

export { CardUsuariosView }

const styles = StyleSheet.create({
    CardStyle: {
        justifyContent: "center",
        margin: 14,
        padding: 12, 
        borderRadius: 6,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: "#f38894"
    }, Title: {
        color: "white",
        fontSize: 20
    }, Atribute: {
        color: "white",
        fontSize: 16,
        marginBottom: 8
    }, Resumen: {
        color: "white",
        fontSize: 12
    }
});