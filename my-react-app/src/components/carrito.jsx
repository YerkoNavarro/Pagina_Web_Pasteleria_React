import React, { useState, useEffect } from 'react';
import { obtenerCarrito, calcularTotal, vaciarCarrito } from '../storage/gestionStorage.jsx';
import { Container, Alert, Button } from 'react-bootstrap';

function Carrito() {
    const [listaDelCarrito, setListaDelCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    useEffect(() => {
        const carrito = obtenerCarrito();
        setListaDelCarrito(carrito);
        setPrecioTotal(calcularTotal());
    }, []);

    const accionComprar = () => {
        vaciarCarrito();
        setListaDelCarrito([]);
        setPrecioTotal(0);
        setMostrarConfirmacion(true);
        
        setTimeout(() => {
            setMostrarConfirmacion(false);
        }, 5000);
    };

    const accionVaciarCarrito = () => {
        vaciarCarrito();
        setListaDelCarrito([]);
        setPrecioTotal(0);
    };

    return (
        <>
            <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
                <div className="big-title">
                    <h1 className="display-4">Carrito De Compras</h1>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Carrito de compras</h5>
                                <p className="card-text">Lista de productos en el carrito</p>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listaDelCarrito.map((producto, index) => (
                                            <tr key={index}>
                                                <td>{producto.nombre}</td>
                                                <td>${producto.precio}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {listaDelCarrito.length === 0 && (
                                    <p>Tu carrito está vacío.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Resumen</h5>
                                <p className="card-text">Total de la compra</p>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Total:</strong></td>
                                            <td><strong>${precioTotal}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Container>
                    {mostrarConfirmacion && (
                        <Alert variant="success" className="mb-3">
                            <Alert.Heading>¡Compra Exitosa!</Alert.Heading>
                            <p>¡Productos comprados exitosamente!</p>
                            <p>Tu carrito ha sido vaciado.</p>
                        </Alert>
                    )}
                    
                    {listaDelCarrito.length > 0 && !mostrarConfirmacion && (
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <Button variant="secondary" onClick={accionVaciarCarrito}>
                                Vaciar Carrito
                            </Button>
                            <Button variant="success" onClick={accionComprar}>
                                Comprar Ahora
                            </Button>
                        </div>
                    )}
                    
                    {listaDelCarrito.length === 0 && !mostrarConfirmacion && (
                        <div className="text-center mt-4">
                            <p>Tu carrito está vacío.</p>
                            <Button variant="primary" href="/productos">
                                Ver Productos
                            </Button>
                        </div>
                    )}
                </Container>
            </div>

            <div className="my-5" />
        </>
    );
}

export default Carrito;

