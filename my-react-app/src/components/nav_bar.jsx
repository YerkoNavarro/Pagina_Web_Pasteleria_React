import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar 
      expand="lg" 
      className="pastel-navbar" 
      aria-label="Menú principal"
    >
      <Container>
        <Navbar.Brand href="#">Pastelería 1000 Sabores</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" aria-current="page" className="active">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/usuario">Usuario</Nav.Link>
            <Nav.Link as={Link} to="/sobrenosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/carro">Carrito</Nav.Link>
          </Nav>

          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;