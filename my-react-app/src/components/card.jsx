import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ nombre, descripcion, precio, imagen, onAgregar, productoData }) {
    const handleAgregarClick = () => {
        onAgregar(productoData); 
    };
    
    const handleComprarClick = () => {
        onAgregar(productoData);
        window.location.href = '/carro';
    };
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />

      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          ${precio}
        </Card.Text>
        <Card.Text>
          {descripcion}
        </Card.Text>
        
        <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={handleAgregarClick}>
                Añadir al Carrito
            </button>
            <button className="btn btn-success" onClick={handleComprarClick}>
                Comprar Ahora
            </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;