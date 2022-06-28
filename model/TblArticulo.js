import { Entity } from "../model/core/Entity.js";

class TblArticulo extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblArticulo",
    }

     id_articulo = 1;
     nombre_art = "Michael Blue";
     descripcion = "Zapatos de buena calida";
     estado = 1;
     id_categoria = 1;

}

export { TblArticulo }