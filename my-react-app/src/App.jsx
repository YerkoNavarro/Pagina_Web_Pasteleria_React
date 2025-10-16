import { Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/inicio'
import Productos from './paginas/productos'
import Comunidad from './paginas/comunidad'
import SobreNosotros from './paginas/sobrenosotros'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/comunidad" element={<Comunidad />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
    </Routes>
  )
}

export default App
