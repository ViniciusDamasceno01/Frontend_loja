import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Catalog from './pages/Catalog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  )
}

export default App
