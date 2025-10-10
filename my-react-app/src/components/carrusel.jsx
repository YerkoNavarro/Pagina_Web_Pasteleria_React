import Carousel from 'react-bootstrap/Carousel';
import pastel_2 from '../imagenes/pastel_2.png';
import pastel_3 from '../imagenes/pastel_3.png';
import pastel from '../imagenes/pastel.png';
function UnCarrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pastel_2}
          alt="Imagen pastel - First slide"
        />
        <Carousel.Caption>
            <h5>El amor de una vida</h5>
              <p>Pastelería 1000 Sabores celebra su 50 aniversario como un referente en la repostería chilena.</p>
              <p>Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la torta más grande del mundo.</p>
              <p>Hoy busca renovar su sistema de ventas online para ofrecer una experiencia de compra moderna y accesible para sus clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pastel_3}
          alt="Imagen pastel - Second slide"
        />
        <Carousel.Caption>
            <h5>Endulza la vida</h5>
              <p>Ofrecer una experiencia dulce y memorable a nuestros clientes, proporcionando tortas y productos de repostería de alta calidad para todas las ocasiones.</p>
              <p>Celebramos nuestras raíces históricas y fomentamos la creatividad en la repostería.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pastel}
          alt="Imagen pastel - Third slide"
        />
        <Carousel.Caption>
          <h5>Un corazón para todos</h5>
              <p>Convertirnos en la tienda online líder de productos de repostería en Chile, conocida por nuestra innovación, calidad y el impacto positivo en la comunidad.</p>
              <p>Especialmente en la formación de nuevos talentos en gastronomía.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default UnCarrusel;