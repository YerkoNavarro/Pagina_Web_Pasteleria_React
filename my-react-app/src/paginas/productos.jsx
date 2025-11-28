import NavBar from '../components/nav_bar'

import UnFooter from '../components/C_footer'
import ProductCard from '../components/card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import imagenAlfajor from '../imagenes/Gemini_Generated_Image_alfajor.png'
import imagenPastel from '../imagenes/Gemini_Generated_Image_pastel.png'
import imagenPieLimon from '../imagenes/Gemini_Generated_Image_pie_limon.png'
import imagenCafe from '../imagenes/Gemini_Generated_Image_z5gheyz5gheyz5gh.png'
import imagenSandwich from '../imagenes/Gemini_Generated_Image_i37ja2i37ja2i37j.png'
import SearchBar from '../components/SearchBar'
import { useEffect, useMemo, useState } from 'react'

import { añadirAlCarro } from '../storage/gestionStorage'

import Container from 'react-bootstrap/Container'
import ProductoService from '../services/productoServices'

import { fetchProductos } from '../storage/apiStorage'
function Productos() {
    const productoService = new ProductoService()
    const [productos, setProductos] = useState([])

    const handleAgregarAlCarro = (producto) => {
        const resultado = añadirAlCarro(producto);
        if (resultado) {
            console.log('Producto agregado al carrito:', producto);
        } else {
            console.error('Error al agregar el producto');
        }
    };

    useEffect(() => {
        (async () => {
            const respuesta = await fetchProductos();
            if (respuesta.success) {
                setProductos(respuesta.data);
            } else {
                console.error('Error al cargar los productos:', respuesta.error);
            }
        })()
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
            <Container>
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
                        onAgregar={handleAgregarAlCarro}
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