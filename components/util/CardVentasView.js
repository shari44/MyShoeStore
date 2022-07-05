import { StyleSheet, Text, Button, View } from 'react-native';

const CardVentasView = (props) => {

    return (<View style = {styles.CardStyle}>
        <Text style = {styles.Title}>Fecha de venta: {props.data.fecha_Venta}</Text>
        <Text style = {styles.Atribute}>IVA: {props.data.iva}</Text>
        <Text style = {styles.Atribute}>SubTotal: {props.data.subtotal}</Text>
        <Text style = {styles.Atribute}>Total: {props.data.total}</Text>

        <Button color = "#f22d44" title="Ver detalles" onPress={() => {
                props.Detalle(props.data);
            }} />

    </View>);
}

export { CardVentasView }

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