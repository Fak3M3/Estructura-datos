// Crea un arreglo vacío llamado listaDeCompras.
// Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
// Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
// Implementa una función mostrarLista() que imprima todos los productos de la lista.
// Asegúrate de que no haya productos duplicados en la lista.
// Puedes usar arrow functions para la funcionalidad solicitada así
//  como otras características del estandar ECMAScript.

let listaDeCompras = new Set();

export const agregarProducto = (producto) =>{
    listaDeCompras.add(producto);
}

export const eliminarProducto = (producto) => {
    if (listaDeCompras.has(producto)) {
        listaDeCompras.delete(producto);
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista.`);
    }
}

export const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
      console.log("La lista de compras está vacía.");
    } else {
      console.log("Lista de Compras:");
      
      listaDeCompras.forEach((producto) => {
        console.log(`${producto}`);
      });
    }
}

