import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ Nombre, Descripcion, Precio, Imagen, onAgregar, productoData }) {
    const handleAgregarClick = () => {
        onAgregar(productoData); 
    };
    
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
        
    <button className="btn btn-primary" onClick={handleAgregarClick}>
        Añadir al Carrito
    </button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;