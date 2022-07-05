import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TextInput, Button } from 'react-native';

import { CardUsuariosView } from '../util/CardUsuariosView';
import { TblUsuario } from '../../model/TblUsuario';

class UsuariosView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.TblUser = new TblUsuario();
        this.CargarUsuarios();
    }

    CargarUsuarios = async (param = "") => {
        const a = await this.TblUser.Get(param);

        this.setState({
            isLoading: false,
            Dataset: a
        });

    }

    UserVendedor = async (id, name) => {
    
        this.props.route.params.UserVendedor(id, name);
        this.props.navigation.navigate("NewVenta");
      }

    render() {

        return (<ScrollView style = {styles.CardStyles}>
            <TextInput style = {styles.text_input}
            placeholder = 'Buscar usuario'
            onChangeText = { val => this.CargarUsuarios(val)}></TextInput>

            {this.state.isLoading ?
                <ActivityIndicator /> :
                this.state.Dataset.map(
                    c => <CardUsuariosView key = {c.id_usuario}
                     data = { c } UserVendedor = { this.UserVendedor}/>
                )}
        </ScrollView> )
    }
}

export { UsuariosView }

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