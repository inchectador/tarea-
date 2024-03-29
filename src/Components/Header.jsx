import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


  function cerrarSesion(){
    localStorage.removeItem('usuario')
    localStorage.removeItem('contrasena')
    res.redirect('/')
  }




  return (
    <header className='header'>
        <h1>NovoGuitars</h1>
        <ul className='header__lista'>
            <li className='header__elementoLista'><Link to={'/'}>Inicio</Link></li>
            {localStorage.getItem('usuario') == null ? <></> : <li className='header__elementoLista'> <Link to={'/Productos'}>Productos</Link></li>}
            {localStorage.getItem('usuario') == null ? (<li className='header__elementoLista'><Link to={'/login'}>Login</Link></li>) : 
            (<li className='header__elementoLista'>Bienvenido/a {localStorage.getItem('usuario')}</li>)}
            {localStorage.getItem('usuario') != null ? (<button className='header__button' type='button' onClick={cerrarSesion}>Cerrar Sesión</button>) :
            <></>}
        </ul>
    </header>
  )
}

export default Header
