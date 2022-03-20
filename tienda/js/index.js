
import {sendData,Raton,Teclado,Monitor,Computadora} from "./models/Dispositivo.js";
import {Orden} from "./models/Orden.js";
import {Stock} from "./models/Stock.js"



/* Orden */
const newOrder = new Orden();

/* Stock */
const newStock = new Stock();

/* Me sirvio para comprobar una prueba de ambito */
export const addRaton = () =>{
    
    const formR = document.getElementById("formRaton");
    const marcaR = formR["marca"];
    const entradaR = formR["entrada"];
    let newRaton = new Raton(entradaR.value,marcaR.value);
    newStock.agregarRaton(newRaton);
    newStock.mostrarRatones();
    //sendData();
}


export const app = () =>{
    // Formularios
    const formR = document.getElementById("formRaton");
    const formT = document.getElementById("formTeclado");
    const formM = document.getElementById("formMonitor");
    const formC = document.getElementById("formComputadora");

    // Labels
    const marcaR = formR["marca"];
    const entradaR = formR["entrada"];
    const marcaT = formT["marca"];
    const entradaT = formT["entrada"];
    const tipoT = formT['tipo'];
    const marcaM = formM["marca"]; 
    const tamanioM = formM["tamanio"]; 
    const name = formC["nombre"];

    // Create Objects
    const newRaton = new Raton(entradaR.value,marcaR.value);
    const newTeclado = new Teclado(entradaT.value,marcaT.value,tipoT.value);
    const newMonitor = new Monitor(entradaR.value,tamanioM.value);
    const newComputadora = new Computadora(name.value,newMonitor,newTeclado,newRaton);
    
    // Order
    
    newOrder.agregarComputadora(newComputadora);
    newOrder.mostrarOrden();

    //sendData();
}

window.addRaton = addRaton;
window.app = app;
