import { Entity } from "./core/Entity.js";
import { TblArticulo } from "./TblArticulo";

class TblDetalleFactura extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblDetalleFactura",
    }

    id_detalle_factura = 1;
    id_factura = 1;
    id_articulo = 1;
    estado = "1";
    precio = "2500";
    cantidad = "1";
    descuento = "0.00";
    total = "2870";

    TblArticulo = {
        val: [],
        get: async ()=> {
            if (this.id_articulo != "") {
                const art = new TblArticulo();

                return await art.GetByProps("id_articulo", this.id_articulo);
            }else{
                return this.TblArticulo.val;
            }            
        }, set(newValue) {
            this.TblArticulo.val = newValue;
        }
    }
    

}

export { TblDetalleFactura }