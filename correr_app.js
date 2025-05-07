import { agregarProducto, eliminarProducto, mostrarLista} from './app.js';

const iniciarApp = () =>{
    agregarProducto("Manzanas");
    agregarProducto("Leche");
    agregarProducto("Pan");

    // Intentando agregar un duplicado
    agregarProducto("Leche");    
    
    //mostrando lista
    mostrarLista();

    // Eliminando un producto
    eliminarProducto("Leche");

    //mostrando lista
    mostrarLista();

    // Intentando agregar un duplicado
    agregarProducto("Pan");  

    //mostrando lista
    mostrarLista();

    // Eliminando un producto
    eliminarProducto("Leche");

    //mostrando lista
    mostrarLista();
}

// Ejecutando app
iniciarApp();