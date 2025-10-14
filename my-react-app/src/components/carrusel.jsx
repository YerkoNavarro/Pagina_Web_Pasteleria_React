import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UnCarrusel({ imagen1, imagen2, imagen3, descripcion1, descripcion2, descripcion3 }) {
  return (
    <Carousel style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Primera imagen del carrusel"
        />
        <Carousel.Caption>
          <h3>{descripcion1}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Segunda imagen del carrusel"
        />
        <Carousel.Caption>
          <h3>{descripcion2}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Tercera imagen del carrusel"
        />
        <Carousel.Caption>
          <h3>{descripcion3}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default UnCarrusel;