import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ Nombre, Descripcion, Precio, Imagen }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagen}/>

      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>
          {Precio}
        </Card.Text>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;