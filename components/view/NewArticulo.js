import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import { TblArticulo } from '../../model/TblArticulo';

class NewArticulo extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.Articulo = new TblArticulo();

        this.state = {
            NombreCategoria: ""
        };
        this.CargarArticulos =this.props.route.params.CargarArticulos;
    }

    Seleccted = async (id, name) => {

        this.setState({
            NombreCategoria: name
        });

        this.Articulo.id_categoria = id;
    }


    Save = async () => {
        try {

            await this.Articulo.Save("id_articulo");

            return true;
        } catch (error) {
            console.log(error);
            return true;
        }

    }

    render() {
        return <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>
            <Text style={styles.Title}>Nuevo Articulo</Text>
            {/** FORMULARIO */}

            <TextInput style={styles.InputStyle}
                placeholder='Nombre de articulo'
                onChangeText={val => this.Articulo.nombre_art = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Descripcion'
                multiline
                numberOfLines={3}
                onChangeText={val => this.Articulo.descripcion = val} />

            <TextInput style={styles.InputStyle}
                placeholder='Estado'
                onChangeText={val => this.Articulo.estado = val} />

            <View style = {styles.box_row}>
            <TextInput style={styles.InputStyle}
                placeholder='Categoria'
                value = {this.state.NombreCategoria}
                />
            <Button color = "#f22d44" title="+" onPress = {async () => {
                this.props.navigation.navigate("CategoriasView", {
                    Seleccted: this.Seleccted
                });
            }} />
            </View>
            <Separator />
            {/** OPCIONES */}
            <Button color = "#f22d44" title="Guardar" onPress={async () => {
                const response = await this.Save();
                if (response) {
                    await this.CargarArticulos(); 
                    this.props.navigation.navigate("ArticulosView");
                } else {
                    Alert.alert("error..");
                }
            }} />
            <Separator />
            <Button color = "#f22d44" title="Cancelar" onPress={() => {
                this.props.navigation.navigate("ArticulosView");
            }} />
        </ScrollView>;
    }
}

export { NewArticulo }

const Separator = () => (
    <View style={styles.separator} />
  );

const styles = StyleSheet.create({
    Title: {
        margin: 10,
        fontSize: 26,
        color: "#ec4b30"
    }, InputStyle: {
        flex: 1,
        height: 50,
        margin: 12,
        fontSize: 18,
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