import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const CardArticulosView = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de articulo: {props.data.nombre_art}</Text>
        <Text style = {styles.Atribute}>Descripcion: {props.data.descripcion}</Text>
        <Text style = {styles.Atribute}>Estado: {props.data.estado}</Text>
        {
            
        }

    </View>);
}

export { CardArticulosView }

const styles = StyleSheet.create({
    CardStyle: {
        justifyContent: "center",
        margin: 14,
        padding: 12, 
        borderRadius: 6,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: "#F500CA",

        borderWidth: 3,
        borderColor: '#F50188'
    }, Title: {
        color: "white",
        fontSize: 26
    }, Atribute: {
        color: "white",
        fontSize: 16,
        marginBottom: 8
    }, Resumen: {
        color: "white",
        fontSize: 12
    }
});