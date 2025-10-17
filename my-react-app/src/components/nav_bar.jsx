import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

  

function NavBar() {
    return (
  
    <nav className="navbar navbar-expand-lg pastel-navbar" aria-label="Menú principal">
      <div className="container">
        <a className="navbar-brand" href="#">Pastelería 1000 Sabores</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav bg-whiteme-auto mb-2 mb-lg-0">
            <li className="nav-item" ><Link className="nav-link active" to="/" aria-current="page">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/usuario">Usuario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sobrenosotros">Sobre Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/carro">Carrito</Link></li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/registro">Registrarse</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default NavBar;
