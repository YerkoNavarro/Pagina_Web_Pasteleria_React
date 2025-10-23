


import React, { useState, useEffect } from 'react';
import { obtenerCarrito, calcularTotal, vaciarCarrito } from '../storage/gestionStorage.jsx';
import { Container } from 'react-bootstrap';

function Carrito() {
    const [listaDelCarrito, setListaDelCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {   //lee el carrito, actualiza el componente para que muestre los productos
        const carrito = obtenerCarrito();
        setListaDelCarrito(carrito);
        setPrecioTotal(calcularTotal());
    }, []);

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
                                                <td>{producto.Nombre}</td>
                                                <td>${producto.Precio}</td>
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
                                    <tr>
                                        <td><strong>Total:</strong></td>
                                        <td><strong>${precioTotal}</strong></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Container>
                    {listaDelCarrito.length > 0 && (
                        <button className="btn btn-primary" onClick={accionVaciarCarrito}>
                            Vaciar carrito
                        </button>
                    )}
                </Container>
            </div>

            <div className="my-5" />
        </>
    );
}

export default Carrito;

