import { Entity } from "../model/core/Entity.js";

class TblCategoria extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblCategoria",
    }

    id_categoria = 1
    nombre_cat = "Botas"
    estado = "1"
   

}

export { TblCategoria }