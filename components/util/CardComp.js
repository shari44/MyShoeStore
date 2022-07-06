import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView, TextInput } from 'react-native';

//Componentes

class CardComp extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        
        this.state = {
            isLoading: true,
            Dataset: []
        }

        this.objeto = this.props.objeto;
        this.Cargar();

    }

    Cargar = async () => {
      const list = await this.objeto.TblArticulo.get();
    
      this.setState({
          Dataset: list
      });
  }

    render() {

        return (<View>
             {
            this.state.Dataset.map(m => 
                <Text key = {m.id_articulo} style = {{fontSize: 18, color: '#000'}}>Nombre de articulo: {m.nombre_art}</Text> )
             }
            
        </View>)
    }
}

export { CardComp }