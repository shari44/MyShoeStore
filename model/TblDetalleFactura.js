import { Entity } from "./core/Entity.js";

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

}

export { TblDetalleFactura }