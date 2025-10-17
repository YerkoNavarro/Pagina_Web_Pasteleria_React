import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UnCarrusel({ imagen1, imagen2, imagen3, descripcion1, descripcion2, descripcion3 }) {
  return (
    <Carousel style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Carousel.Item>
        <div className="ratio ratio-16x9" style={{ overflow: 'hidden' }}>
          <img
            className="w-100 h-100"
            src={imagen1}
            alt="Primera imagen del carrusel"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Carousel.Caption>
          <h3>{descripcion1 || 'Dulces momentos que alegran el corazón'}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ratio ratio-16x9" style={{ overflow: 'hidden' }}>
          <img
            className="w-100 h-100"
            src={imagen2}
            alt="Segunda imagen del carrusel"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Carousel.Caption>
          <h3>{descripcion2 || 'Sabores artesanales hechos con amor'}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ratio ratio-16x9" style={{ overflow: 'hidden' }}>
          <img
            className="w-100 h-100"
            src={imagen3}
            alt="Tercera imagen del carrusel"
            style={{ objectFit: 'cover' }}
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