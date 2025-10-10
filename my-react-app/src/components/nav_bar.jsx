

import navbar from 'react-bootstrap/Navbar';



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
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Catálogo</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Sobre Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
            <li class="nav-item"><a class="nav-link" href="comunidad.html">Comunidad</a></li>
            <li class="nav-item"><a class="nav-link" href="usuario.html">Usuario</a></li>
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="login.html">Iniciar Sesión</a></li>
            <li class="nav-item"><a class="nav-link" href="registro.html">Registrarse</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default NavBar;
