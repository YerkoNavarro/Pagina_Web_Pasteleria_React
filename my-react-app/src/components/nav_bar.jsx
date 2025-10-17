import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

  

function NavBar() {
    return (
  
    <nav class="navbar navbar-expand-lg bg-body-tertiary pastel-navbar " aria-label="Menú principal">
      <div class="container">
        <a class="navbar-brand" href="#">Pastelería 1000 Sabores</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" to="/" aria-current="page">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/comunidad">Comunidad</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/usuario">Usuario</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sobrenosotros">Sobre Nosotros</Link></li>
            <li class="nav-item"><Link className="nav-link" to="/carro">Carrito</Link></li>
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
            <li class="nav-item"><Link className="nav-link" to="/register">Registrarse</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default NavBar;
