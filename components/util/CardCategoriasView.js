import { StyleSheet, Text, Button, View,TouchableOpacity } from 'react-native';

const CardCategoriasView = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Nombre de categoria: {props.data.nombre_cat}</Text>
        <Text style = {styles.Atribute}>Estado: {props.data.estado}</Text>

        <Button color = "#f22d44" title="Seleccionar" onPress={() => {
                props.Seleccted(props.data.id_categoria, props.data.nombre_cat);
            }} />

    </View>);
}

export { CardCategoriasView }

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