
export class Stock{
    /* Contador de Items en Stock */
    static idItem = 0;
    static contadorRatones = 0;
    static contadorTeclados = 0;
    static contadorMonitores = 0;
    static contadorComputadoras = 0;

    constructor(){
        this._idItem = ++Stock.idItem;
        this._ratones = [];
        this._teclados = [];
        this._monitores = [];
        this._computadoras = [];
    }

    agregarRaton(raton) {
        this._ratones.push(raton);
    }

    agregarTeclado(teclado) {
        this._teclados.push(teclado);
    }
    
    agregarMonitor(monitor) {
        this._monitores.push(monitor);
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarRatones(){
        console.log(`------- Ratones en Stock -------`);
        this._ratones.map((rtn) =>{ console.log(`${rtn.toString()}`) });
    }

    mostrarTeclados(){
        console.log(`------- Teclados en Stock -------`);
        this._teclados.map((cmpt) =>{ console.log(`${cmpt.toString()}`) });
    }

    mostrarMonitores(){
        console.log(`------- Monitores en Stock -------`);
        this._monitores.map((cmpt) =>{ console.log(`${cmpt.toString()}`) });
    }

    mostrarComputadoras(){
        console.log(`------- Computadoras en Stock -------`);
        this._computadoras.map((cmpt) =>{ console.log(`${cmpt.toString()}`) });
    }

}