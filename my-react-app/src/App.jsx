import { Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/inicio'

function App() {
  return (
    <>
      <NavBar />

      <section class="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
        <div class="big-title">
          <h1 class="display-4">¡50 Años Endulzando Chile!</h1>
          <p class="lead">Participamos en el récord Guinness de la torta más grande del mundo 🎂</p>
          <a href="#" class="button-explorar-productos" role="button">Explorar Productos</a>
        </div>
      </section>

      <UnCarrusel />

      <UnFooter />
    </>
  )
}

export default App
