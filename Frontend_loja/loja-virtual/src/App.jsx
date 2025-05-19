import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Catalog from './pages/Catalog'
import Register from "./pages/Register";


// Dentro de <Routes>
<Route path="/register" element={<Register />} />


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} /> {/* <-- Aqui */}
    </Routes>
  )
}

export default App
