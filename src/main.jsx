import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Productos from './pages/Productos'
import DetallesProducto from './pages/DetallesProducto'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/login' element={localStorage.getItem('usuario') == null ? <Login /> : <Inicio/>} />
      {/* esto lo que dice es que si el usuario está registrado te lleva a inicio, sino, a login */}
      <Route path='/Productos' element={localStorage.getItem('usuario') == null ? <Login/> : <Productos />} />
      <Route path='/productos/:id' element={localStorage.getItem('usuario') == null ? <Login/> : <DetallesProducto/>} />
      {/* esto lo que hace es que según el id habrá una ruta diferente dentro de /productos */}
  
    </Routes>
  </Router>
)
