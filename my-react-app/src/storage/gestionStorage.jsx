



export function añadirAlCarro(producto){

    try {

        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoActual.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carritoActual));
        console.log("Producto agregado al carrito");
    } catch (error) {
        console.log(error);
    }
    
}

export function obtenerCarrito(){
    try {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        return carritoActual;
    } catch (error) {
        console.log(error);
    }
}

export function calcularTotal(){
    try {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        return carritoActual.reduce((total, producto) => total + parseInt(producto.Precio || 0),0);
    } catch (error) {
        console.error('Error al calcular total:', error.message);
        return 0;
    }
}

export function vaciarCarrito(){
    try {
        localStorage.removeItem('carrito');
        console.log("Carrito vaciado");
    } catch (error) {
        console.log(error);
    }
}
