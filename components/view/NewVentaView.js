import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';

import { TblFactura } from '../../model/TblFactura'
import { CardComp } from '../util/CardComp';

class NewVentasView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            usuario: "",
            detalle: []
        };

        this.Venta = new TblFactura();
        this.CargarVentas =this.props.route.params.CargarVentas;
    }

    AddDetalle = async (datails) => {

        this.state.detalle.push(datails);

        this.setState({
         detalle: this.state.detalle,
        });

        this.props.navigation.navigate("NewVenta");
    }

    UserVendedor = async (id, name) => {

        this.setState({
            usuario: name
        });

        this.Venta.id_usuario = id;
    }

    EliminarArticulo = async (param) => {

        const eliminar = this.state.detalle.filter(i => i.id_articulo !== param.id_articulo);
 
        this.setState({
            detalle: eliminar
        });
    }


    Save = async () => {
        try {
            await this.Venta.Save("id_factura");

            for (let index = 0; index < this.state.detalle.length; index++) {
                const detalle = this.state.detalle[index];
                detalle.id_factura = this.Venta.id_factura;

                await detalle.Save("id_detalle_factura");
            }

            return true;
        } catch (error) {
            console.log(error);
            return true;
        }

    }

    render() {
        return <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>
            <Text style={styles.Title}>Nueva Venta</Text>
            {/** FORMULARIO */}

            <View style = {styles.box_row}>
            <TextInput style={styles.InputStyle}
                placeholder='Usuario'
                value = {this.state.usuario}
                />
            <Button color = "#f22d44" title="+" onPress = {async () => {
                this.props.navigation.navigate("UsuariosView", {
                    UserVendedor: this.UserVendedor
                });
            }} />
            </View>

            <TextInput style={styles.InputStyle}
                placeholder='Nombre de Cliente'
                onChangeText={val => this.Venta.nombre_Cliente = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Fecha'
                onChangeText={val => this.Venta.fecha_Venta = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Estado de venta'
                onChangeText={val => this.Venta.estado = val} />

            <Button color = "#f22d44" title="Agregar articulo" onPress={async () => {
                this.props.navigation.navigate("NewDetalleVentaView", {
                    AddDetalle: this.AddDetalle
                });
            }} />

            {/** Lista de articulos agregados */}
            <Text style={styles.Title}>Articulos</Text>
            
            {
                this.state.detalle.map(
                    c => <View key = {c.id_articulo} style = {{ padding: 8, borderWidth: 2, borderColor: '#f22d44'}}>
                        <CardComp key = {c.id_articulo + 1} objeto = {c} />
                        <Text style = {{fontSize: 16, color: '#000'}}>Cantidad: {c.cantidad}</Text>
                        <Text style = {{fontSize: 16, color: '#000', marginBottom: 4}}>Total: {c.total}</Text>
                        <Button color = "#ad1457" title = 'Eliminar' onPress={async () => { 
                            this.EliminarArticulo(c);
                        }}></Button>
                    </View>
                )
                }

            <Text style={styles.Title}>Datos de venta</Text>
            {/** Datos de venta */}
            <TextInput style={styles.InputStyle}
                placeholder='Descuento'
                onChangeText={val => this.Venta.descuento = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Iva'
                onChangeText={val => this.Venta.iva = val} />
            <TextInput style={styles.InputStyle}
                placeholder='SubTotal'
                onChangeText={val => this.Venta.subtotal = val} />
            <TextInput style={styles.InputStyle}
                placeholder='Total'
                onChangeText={val => this.Venta.total = val} />

            <Separator />
            {/** OPCIONES */}
            <Button color = "#f22d44" title = "Guardar" onPress={async () => {
                const response = await this.Save();
                if (response) {
                    await this.CargarVentas(); 
                    this.props.navigation.navigate("VentasView");
                } else {
                    Alert.alert("error..");
                }
            }} />
            <Separator />
            <Button color = "#ad1457" title="Cancelar" onPress={() => {
                this.props.navigation.navigate("VentasView");
            }} />
        </ScrollView>;
    }
}

export { NewVentasView }

const Separator = () => (
    <View style={styles.separator} />
  );

const styles = StyleSheet.create({
    Title: {
        margin: 10,
        fontSize: 26,
        color: "#ad1457"
    }, InputStyle: {
        padding: 14,
        flex: 1,
        height: 50,
        margin: 4,
        fontSize: 16,
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