import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

import { TblFactura } from '../../model/TblFactura';
import { CardVentasView } from '../util/CardVentasView';

class VentasView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblVentas = new TblFactura();
        this.CargarVentas();
    }

    CargarVentas = async (param = "") => {
        const a = await this.TblVentas.Get(param);

        this.setState({
            isLoading: false,
            Dataset: a
        });

    }

    Detalle = async (param) => {

    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar venta'
            onChangeText = { val => this.CargarVentas(val)}></TextInput>

            <View style = {{marginLeft: 14, marginRight: 14}}>
            <Button
                    title="Nueva venta"
                    color="#f22d44"
                    onPress={() => {
                    this.props.navigation.navigate("NewVenta",
                     { CargarVentas: this.CargarVentas }); 
                    }}
                />
            <Text style={styles.Title}>Historial de ventas</Text>    
            </View>
            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardVentasView key = {c.id_factura}
                     data = { c } Detalle = { this.Detalle }/>
                )}
        </ScrollView> )
    }
}

export { VentasView }

const styles = StyleSheet.create({
    Title: {
        margin: 10,
        fontSize: 26,
        color: "#ec4b30"
    },
    CardStyles:{
      flex: 5,
      width: "100%",
      backgroundColor: 'white'
        },
    text_input: {
        height: 50,
        margin: 12,
        fontSize: 18,
        padding: 4,
        backgroundColor: '#e0e0e0',
        borderRadius: 4
      },
    
  });