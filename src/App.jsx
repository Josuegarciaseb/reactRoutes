import { Routes, Route} from 'react-router-dom'
import './App.css'
import Inicio from './vistas/Inicio'
import Productos from './vistas/Productos'

function App() {
  return (
    <Routes>  
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  )
}

export default App
