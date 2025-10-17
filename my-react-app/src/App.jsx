import { Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/inicio'
import Productos from './paginas/productos'
import Comunidad from './paginas/comunidad'
import SobreNosotros from './paginas/sobrenosotros'
import Login from './paginas/login'
import Register from './paginas/registro'
import Usuario from './paginas/usuario'
import Contacto from './paginas/contacto'
import Carro from './paginas/carro'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/comunidad" element={<Comunidad />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/carro" element={<Carro />} />
    </Routes>
  )
}

export default App
