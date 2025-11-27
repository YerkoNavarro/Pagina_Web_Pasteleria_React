import NavBar from '../components/nav_bar'

import UnFooter from '../components/C_footer'
import ProductCard from '../components/card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchBar from '../components/SearchBar'
import { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

import { añadirAlCarro, obtenerProductos } from '../storage/gestionStorage'

import Container from 'react-bootstrap/Container'
function Productos() {
    const [term, setTerm] = useState('')
    const [productos, setProductos] = useState(obtenerProductos())
    const [showCartModal, setShowCartModal] = useState(false)
    const [lastAddedProduct, setLastAddedProduct] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleStorageChange = () => {
            setProductos(obtenerProductos())
        }
        
        window.addEventListener('storage', handleStorageChange)
        
        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const filtrados = useMemo(() => {
        const t = term.trim().toLowerCase()
        if (!t) return productos
        return productos.filter(p =>
            p.Nombre.toLowerCase().includes(t) ||
            p.Descripcion.toLowerCase().includes(t)
        )
    }, [term, productos])

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
                <SearchBar value={term} onChange={setTerm} />
            </div>
            <Row className="g-4 justify-content-center">
            {filtrados.map(producto => (

               

                <Col key={producto.Nombre} xs={12} sm={6} md={4} lg={3}>
                    
                    
                    <ProductCard
                        Nombre={producto.Nombre}
                        Descripcion={producto.Descripcion}
                        Precio={producto.Precio}
                        Imagen={producto.Imagen}
                        onAgregar={(producto) => {
                            const success = añadirAlCarro(producto);
                            if (success) {
                                setLastAddedProduct(producto);
                                setShowCartModal(true);
                            }
                        }}
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