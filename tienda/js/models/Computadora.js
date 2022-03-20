
export class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        return this._monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        return this._teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        return this._raton;
    }
    toString(){
        return `Computadora: [
            idComputadora : ${this._idComputadora}
            nombre: ${this.nombre}
            ${this.monitor.toString()}
            ${this.teclado.toString()}
            ${this.raton.toString()}
        ]`;
    }
}

