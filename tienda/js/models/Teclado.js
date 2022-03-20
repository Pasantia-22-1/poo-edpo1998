import { DispositivoEntrada } from "./DispositivoEntrada.js";

export class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada,marca,tipo){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
        this._tipo = tipo;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado:${this._idTeclado}, tipoEntrada:${this._tipoEntrada}, marca: ${this._marca} tipo: ${this._tipo}]`;
    }
}
