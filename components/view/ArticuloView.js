import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';


//Componentes
//import { CardProductosView } from '../utility/CardProductosView';

//Models
//import { TblProductos } from '../../model/TblProducto';

class ArticuloView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: [],
            selecct: this.props.route.params ?? false
        }

        this.TblProductos = new TblProductos();
        this.CargarArticulos();
    }

    CargarArticulos = async (param = "") => {
        const a = await this.TblProductos.Get(param);

        this.setState({
            isLoading: false,
            Dataset: a
        });

    }

    SeleccionArticulo = async (pk, name) => {
        this.props.route.params.SeleccionProducto(pk, name);
        this.props.navigation.navigate("Detalle de Compra");
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar productos'
            onChangeText = { val => this.CargarArticulos(val)}></TextInput>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardProductosView key = {c.PKProducto}
                     data = { c } SeleccionProducto = { this.SeleccionProducto } selecct = {this.state.selecct} />
                )}
        </ScrollView> )
    }
}

export { ArticuloView }

const styles = StyleSheet.create({
    CardStyles:{
      flex: 5,
      width: "100%",
      backgroundColor: 'white'
        },
    text_input: {
        height: 50,
        margin: 12,
        fontSize: 20,
        padding: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 10
      },
    
  });