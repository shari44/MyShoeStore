import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';

const CardArticulosView = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de articulo: {props.data.nombre_art}</Text>
        <Text style = {styles.Atribute}>Descripcion: {props.data.descripcion}</Text>
        <Text style = {styles.Atribute}>Estado: {props.data.estado}</Text>
        {
            props.mostrar ? <Button color = "#f22d44" title="Seleccionar" onPress={() => {
                props.AddArticulo(props.data.id_categoria, props.data.nombre_art);
            }} /> : false
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
        backgroundColor: "#f38894"
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