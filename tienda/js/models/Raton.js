
import { DispositivoEntrada } from "./DispositivoEntrada.js";

export class Raton extends DispositivoEntrada{
        static contadorRaton = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = Raton.contadorRaton;
    }

    get idRaton(){
        return this._idRaton;
    }

    set idRaton(id){
        return this._idRaton = id;
    }
    
    toString(){
        return `Raton: [idRaton:${this._idRaton}, tipoEntrada:${this._tipoEntrada}, marca: ${this._marca}]`
    }
}


