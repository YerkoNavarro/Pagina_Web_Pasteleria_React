import { Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/inicio'
import Productos from './paginas/productos'
import Comunidad from './paginas/comunidad'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/comunidad" element={<Comunidad />} />
    </Routes>
  )
}

export default App
