import NavBar from '../components/nav_bar'

import UnFooter from '../components/C_footer'
import ProductCard from '../components/card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchBar from '../components/SearchBar'
import { useEffect, useMemo, useState } from 'react'

import { añadirAlCarro, obtenerProductos } from '../storage/gestionStorage'

import Container from 'react-bootstrap/Container'
import ProductoService from '../services/productoServices'

function Productos() {
    const productoService = new ProductoService()
    const [productos, setProductos] = useState([])

   
    

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await productoService.getAllProductos();
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };
        fetchProductos();
    }, [])


   

    return (
        <>
            <NavBar />
            <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
                <div className="big-title">
                <h1 className="display-4">Productos</h1>
                </div>
            <div className="my-5" /> 
            </section>
            <Container className="mb-5 pb-4">
                <Modal show={showCartModal} onHide={() => setShowCartModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Producto agregado al carrito</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>¡{lastAddedProduct?.Nombre} ha sido agregado a tu carrito!</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowCartModal(false)}>
                            Seguir comprando
                        </Button>
                        <Button variant="primary" onClick={() => navigate('/carro')}>
                            Ir al carrito
                        </Button>
                    </Modal.Footer>
                </Modal>
            <div className="mb-4">
               
            </div>
            <Row className="g-4 justify-content-center">
            {Array.isArray(productos) && productos.map(producto => (

               

                <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
                    
                    
                    <ProductCard
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        imagen={producto.imagen}
                        onAgregar={añadirAlCarro}
                        productoData={producto}/>
                        

                        
                </Col>
            ))}
            </Row>
            </Container>            
            <div className="my-5 mb-5" /> {/* espaciado */}
            <UnFooter />
        </>
    )
}

export default Productos