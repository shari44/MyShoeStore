import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

import { CardCategoriasView } from '../util/CardCategoriasView';
import { TblCategoria } from '../../model/TblCategoria';

class CategoriasView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblCategoria = new TblCategoria();
        this.CargarCategoria();
    }

    CargarCategoria = async (param = "") => {
        const a = await this.TblCategoria.Get(param);

        this.setState({
            isLoading: false,
            Dataset: a
        });

    }

    Seleccted = async (id, name) => {
    
        this.props.route.params.Seleccted(id, name);
        this.props.navigation.navigate("NewArticulo");
      }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar categoria'
            onChangeText = { val => this.CargarCategoria(val)}></TextInput>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardCategoriasView key = {c.id_categoria}
                     data = { c } mostrar = {false} Seleccted = { this.Seleccted}/>
                )}
        </ScrollView> )
    }
}

export { CategoriasView }

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