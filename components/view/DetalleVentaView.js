import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { CardComp } from '../util/CardComp';


class DetalleVentaView extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      Venta: this.props.route.params.objecto,
      Usuario: this.props.route.params.usuario ?? [],
      detalle: this.props.route.params.detalle ?? [],
      productos: []
    }

  }

  render() {
    return <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>
      <Text style={styles.Title}>Detalle de Venta</Text>
      <Button color="#f22d44" title="<- Regresar" onPress={() => {
        this.props.navigation.navigate("VentasView");
      }} />

      <View style = {{
       marginTop: 8,
       padding: 8,
       backgroundColor: 'white',
       borderWidth: 1,
       borderColor: '#ad1457'}}>

      {
        this.state.Usuario.map(c =>
            <Text key={c.id_usuario}>Vendido por: {c.nombre_usu}</Text>
        )
      }

      <Text>Fecha de venta: {this.state.Venta.fecha_Venta}</Text>
      <Text style = {{ marginTop: 4}}>Iva de Venta: {this.state.Venta.iva}</Text>
      <Text>SubTotal: {this.state.Venta.subtotal}</Text>
      <Text>Total: {this.state.Venta.total}</Text>

      <Text style = {{ marginTop: 8, fontSize: 17}}>Articulos</Text>

      <View style = {{ padding: 8, borderWidth: 2, borderColor: '#f22d44'}}>
      {
        this.state.detalle.map(c  =><View key = {c.id_detalle_factura} >
            <CardComp objeto = {c}/>
            <Text style = {{fontSize: 14, color: '#000'}}>Cantidad: {c.cantidad}</Text>
            <Text style = {{fontSize: 14, color: '#000'}}>Total: {c.total}</Text>
        </View>)
      }
      </View>
      </View>
    </ScrollView>;
  }
}

export { DetalleVentaView }

const styles = StyleSheet.create({
  Title: {
    margin: 10,
    fontSize: 26,
    color: "#ec4b30"
  }
});