import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';

import { TblDetalleFactura } from '../../model/TblDetalleFactura'

class NewDetalleVentaView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            articulo: ""
        };

        this.DetalleVenta = new TblDetalleFactura();
        this.AddDetalle =this.props.route.params.AddDetalle;
    }

    AddArticulo = async (id, name) => {

        this.setState({
            articulo: name
        });

        this.DetalleVenta.id_articulo = id;
    }

    
    render() {
        return <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>
            <Text style={styles.Title}>Detalle Venta</Text>
            {/** FORMULARIO */}

            <View style = {styles.box_row}>
            <TextInput style={styles.InputStyle}
                placeholder='Articulo'
                value = {this.state.articulo}
                />
            <Button color = "#f22d44" title="+" onPress = {async () => {
                this.props.navigation.navigate("AddArticulosView", {
                    AddArticulo: this.AddArticulo
                });
            }} />
            </View>

            <TextInput style={styles.InputStyle}
                placeholder='Precio'
                onChangeText={val => this.DetalleVenta.precio = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Cantidad'
                onChangeText={val => this.DetalleVenta.cantidad = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Descuento'
                onChangeText={val => this.DetalleVenta.descuento = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Total'
                onChangeText={val => this.DetalleVenta.total = val} />

            <Separator />
            {/** OPCIONES */}
            <Button color = "#f22d44" title = "Agregar" onPress={async () => {
                this.AddDetalle(this.DetalleVenta);
            }} />
            <Separator />
            <Button color = "#ad1457" title="Cancelar" onPress={() => {
                this.props.navigation.navigate("NewVenta");
            }} />
        </ScrollView>;
    }
}

export { NewDetalleVentaView }

const Separator = () => (
    <View style={styles.separator} />
  );

const styles = StyleSheet.create({
    Title: {
        margin: 10,
        fontSize: 26,
        color: "#ec4b30"
    }, InputStyle: {
        padding: 14,
        flex: 1,
        height: 50,
        margin: 4,
        fontSize: 17,
        padding: 4,
        backgroundColor: '#e0e0e0',
        borderRadius: 4
    },
    box_row: {
        display: 'flex',
        flexDirection: 'row'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
});