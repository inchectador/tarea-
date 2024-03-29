import React from 'react'
import { useState } from 'react'

function Login() {

  const {VITE_HOST} = import.meta.env;


    const [datosUsu, setDatosUsu] = useState({nombre:"", contra:""})
   
    const [login, setLogin] = useState(true)

    function iniciaSesion(e) {
        e.preventDefault();
   
        const options = {
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(datosUsu)
           
        }
        fetch(VITE_HOST, options)
        .then(response=>response.json()) //estos dos then lo que hace es traer otra vez el objeto y te da el success
        .then(data=>{
          if(data.state == 'failed'){
            setLogin(false)
          }else{
            setLogin(true)
            localStorage.setItem('usuario', datosUsu.nombre)
            localStorage.setItem('contrasena', datosUsu.contra)
            // con este localStorage vamos a hacer una ruta privada
            window.location.replace('/')
            // esto te redirige al root
          }
        })
        // con esto le mandamos los datos al servidor
    }
    // si queremos enviar los datos del formulario a express tenemos que hacerlo con fetch
    // después la manera de mandar la información es la siguiente, ? es la manera de mandar la info

    // por otro lado tenemos que enviar la info de tal manera que no se vea, porque así es get, tenemos que
    // mandarlo por post

    function cambiaCampo(e) {
        let nombre = e.target.name;
        let valor = e.target.value;
        setDatosUsu({...datosUsu, [nombre]:valor})
    }
// esto lo que hace es seleccionar el inpur con let nombre y con let valor selecciona el valor que se ha escrito
// de tal manera que datosUsu se actualiza como objeto con esta formulita



  return (
    <>
      {login == false ? <h3>Usuario o contraseña incorrectos</h3> : <></>}
      {/* esto es un pequeño cartelito que sale para indicar que el usu está incorrecto */}
      <form action="" method='post' onSubmit={iniciaSesion}>
        <h2 className='form__title'>Inicia sesión</h2>
        <div className='form__container'>
          <div className='form__group'>
            <input type="text" name='nombre' id='nom' className='form__input' placeholder='Nombre'
             value={datosUsu.nombre} onChange={cambiaCampo} />
          </div>
          <div className='form__container'>
            <input type="text" name='contra' id='pass' className='form__input' placeholder='Contraseña'
             value={datosUsu.contra} onChange={cambiaCampo} />
          </div>
          <input type="submit" className='form__button' value="Enviar" />
        </div>
      </form>
    </>
  )
}

export default Login
