import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import NavBar from './components/nav_bar'
import C_footer from './components/C_footer'

function App() {
  const [count, setCount] = useState(0)

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

    <C_footer />
    </>
  )
}

export default App
