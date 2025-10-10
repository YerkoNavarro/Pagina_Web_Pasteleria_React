import { Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/inicio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  )
}

export default App
