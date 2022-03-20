
export class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        console.log(`------- ${this.toString()} -------`);
        this._computadoras.map((cmpt) =>{ console.log(`${cmpt.toString()}`) });
    }

    toString(){
        return `Orden No. ${this._idOrden}`;
    }

}