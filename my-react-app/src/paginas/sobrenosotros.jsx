import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import UnCarrusel from '../components/carrusel'
import personal from '../imagenes/Gemini_Generated_Image_bvi42dbvi42dbvi4.png'
import pasteleria from '../imagenes/Gemini_Generated_Image_lfoh7flfoh7flfoh.png'
import exterior from '../imagenes/Gemini_Generated_Image_ic921yic921yic92.png'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container'


function sobreNosotros(){
    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
                <h1 className="display-4">Sobre Nosotros</h1>
            </div>
        </section>

        <div className="my-5 mb-5" /> {/*espaciado adicional*/}
        <Container> 
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Quienes Somos</Accordion.Header>
        <Accordion.Body>
          <strong>Una empresa dedicada a la venta de pastelería.</strong> En el año 2023 se creo la empresa Pastelería la cual se dedica a la venta de pastelería, con la finalidad de brindar un servicio de calidad a nuestros clientes y satisfacer sus necesidades, Empezamos con la venta de tortas, y hoy en dia contamos con un amplio catalogo de productos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Donde Estamos</Accordion.Header>
        <Accordion.Body>
          <strong>Nuestra tienda principal se ubica en Viña del Mar</strong> hoy en dia contamos con mas de 8 sucursales repartidas a lo largo de chile. En las ciudades de Santiago, Valparaiso, Concepción y Temuco.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Nuestra misión</Accordion.Header>
        <Accordion.Body>
          <strong>Estamos enfocados en ofrecer la mejor calidad a nuestros clientes</strong> para que puedan disfrutar de nuestros productos. Nuestra misión es brindar una experiencia de compra satisfactoria y satisfacer las necesidades de nuestros clientes.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    <div className="my-5 mb-5" /> {/*espaciado adicional*/}
        <UnCarrusel imagen1={personal} imagen2={pasteleria} imagen3={exterior} descripcion1="Nuestro personal" descripcion2="Nuestro local" descripcion3="Nuestro local" />

        <div className="my-5 mb-5" /> {/*espaciado adicional*/}
        <Container className="contacto-container">
            <h4>Contactanos al numero: +56 9 1234 5678    Sucursal: Viña del Mar n° 24 7</h4>
        </Container>
        <div className="my-5 mb-5" /> {/*espaciado adicional*/}
        <UnFooter/>
        </>
    );
}
export default sobreNosotros;