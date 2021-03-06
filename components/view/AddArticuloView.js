import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

import { TblArticulo } from '../../model/TblArticulo';
import { CardArticulosView } from '../util/CardAticulosView';

class AddArticulosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
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

    AddArticulo = async (id, name) => {
        this.props.route.params.AddArticulo(id, name);
        this.props.navigation.navigate("NewDetalleVentaView");
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
                     data = { c } AddArticulo = {this.AddArticulo} mostrar = {true} />
                )}
        </ScrollView> )
    }
}

export { AddArticulosView }

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