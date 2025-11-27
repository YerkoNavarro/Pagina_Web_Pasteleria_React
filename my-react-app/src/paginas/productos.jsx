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
import { useMemo, useState, useEffect } from 'react'

import { añadirAlCarro, obtenerProductos } from '../storage/gestionStorage'

import Container from 'react-bootstrap/Container'
function Productos() {
    const [term, setTerm] = useState('')
    const [productos, setProductos] = useState(obtenerProductos())

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
            <Container>
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