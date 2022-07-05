import { Entity } from "../model/core/Entity.js";

class TblUsuario extends Entity {
    
    constructor(props) {
        super();
        for (const prop in props) {
            this[prop] = props[prop];
        }
    }

    ApiMethods = {
        Get: "TblUsuario",
    }

    id_usuario = 1;
    nombre_usu = "nulls";
    contraseña = "nulls";
    estado = "0";

}

export { TblUsuario }