import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UnCarrusel({ imagen1, imagen2, imagen3, descripcion1, descripcion2, descripcion3 }) {
  return (
    <Carousel style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Carousel.Item>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
          <img
            className="d-block w-100"
            src={imagen1}
            alt="Primera imagen del carrusel"
            style={{ height: '100%', width: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </div>
        <Carousel.Caption>
          <h3>{descripcion1 || 'Dulces momentos que alegran el corazón'}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Segunda imagen del carrusel"
            style={{ height: '100%', width: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </div>
        <Carousel.Caption>
          <h3>{descripcion2 || 'Sabores artesanales hechos con amor'}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Tercera imagen del carrusel"
            style={{ height: '100%', width: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </div>
        <Carousel.Caption>
          <h3>{descripcion3 || 'Endulzando tus mejores recuerdos'}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default UnCarrusel;