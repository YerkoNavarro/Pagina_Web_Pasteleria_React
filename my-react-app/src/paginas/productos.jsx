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

import Container from 'react-bootstrap/Container'
function Productos() {
    const productos = [
        {
            Nombre: 'Pastel de Chocolate',
            Descripcion: 'Pastel de chocolate con un toque de vainilla',
            Precio: '1000',
            Imagen: imagenPastel
        },
        
        {
            Nombre: 'Pie de Limón',
            Descripcion: 'Relleno cítrico con merengue italiano tostado',
            Precio: '900',
            Imagen: imagenPieLimon
        },
        
        {
            Nombre: 'Cafe Capuccino',
            Descripcion: 'Cafe capuccino con leche',
            Precio: '800',
            Imagen: imagenCafe
        },
        {
            Nombre: 'Alfajor Artesanal',
            Descripcion: 'Doble capa de galleta y dulce de leche cubierto en chocolate',
            Precio: '700',
            Imagen: imagenAlfajor
        },
        
        {
            Nombre: 'Sandwich',
            Descripcion: 'Sandwich de jamón y queso',
            Precio: '950',
            Imagen: imagenSandwich
        },
        
    ]

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
            <Row className="g-4 justify-content-center">
            {productos.map(producto => (
                <Col key={producto.Nombre} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                        Nombre={producto.Nombre}
                        Descripcion={producto.Descripcion}
                        Precio={producto.Precio}
                        Imagen={producto.Imagen}/>
                </Col>
            ))}
            </Row>
            </Container>            
            <div className="my-5" /> {/* espaciado */}
            <div className="my-5" /> {/* espaciado */}
            <UnFooter />
        </>
    )
}

export default Productos