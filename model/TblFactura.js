import { Entity } from "../model/core/Entity.js";

import { TblUsuario } from "./TblUsuario.js";

class TblFactura extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblFactura",
    }

    id_factura = 1;
    nombre_Cliente ="Sin definir";
    fecha_Venta = "12/06/22";
    estado = "1";
    cantidad = "1";
    descuento = "0.000";
    iva = "370";
    subtotal = "2500";
    total = "2870";
    id_usuario = 1;

    TblUsuario = {
        val: [],
        get: async ()=> {
            if (this.id_usuario != "") {
                const usuario = new TblUsuario();

                return await usuario.GetByProps("id_usuario", this.id_usuario);
            }else{
                return this.TblUsuario.val;
            }            
        }, set(newValue) {
            this.TblUsuario.val = newValue;
        }
    }

}

export { TblFactura }