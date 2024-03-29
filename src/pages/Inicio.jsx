import React from 'react'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <main>
      <div className='img__container'>
        <div className='inner__container'>
          <h1 className='h1__heroImg'>Bienvenido a NovoGuitars</h1>
          <h2 className='h2__heroImg'>La tienda donde encontrarás las guitarras que necesitas</h2>
          <button className='button__heroImg'><Link to={'/login'}>Inicia sesión aquí</Link></button>
        </div>
      </div>
    </main>
  )
}

export default Inicio
