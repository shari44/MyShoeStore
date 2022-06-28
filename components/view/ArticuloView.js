import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

import { TblArticulo } from '../../model/TblArticulo';
import { CardArticulosView } from '../util/CardAticulosView';

class ArticuloView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: [],
            selecct: this.props.route.params ?? false
        }

        this.TblArticulo = new TblArticulo();
        this.CargarArticulos();
    }

    CargarArticulos = async (param = "") => {
        const a = await this.TblArticulo.Get(param);

        this.setState({
            isLoading: false,
            Dataset: a
        });

    }

    SeleccionArticulo = async (pk, name) => {
       // this.props.route.params.SeleccionProducto(pk, name);
       // this.props.navigation.navigate("Detalle de Compra");
    }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar articulo'
            onChangeText = { val => this.CargarArticulos(val)}></TextInput>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardArticulosView key = {c.id_articulo}
                     data = { c } />
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
        fontSize: 18,
        padding: 4,
        backgroundColor: '#e0e0e0',
        borderRadius: 4
      },
    
  });