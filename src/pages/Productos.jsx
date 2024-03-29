import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Productos() {
  const {VITE_HOST} = import.meta.env;


    const controller = new AbortController()
    

    const [productos, setProductos] = useState([])


    useEffect(()=>{

        const options = {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            signal:controller.signal
        }


        fetch( VITE_HOST + 'productos' , options)
        .then(res => res.json())
        .then(data => setProductos(data.productos))
        .catch(err => console.log(err)) 
        .finally(()=>controller.abort())
        
    },[])


  return (
    <>
      <ul>
        {productos.map((producto)=>{
          return <td>{producto.id} <Link to={'/productos/' + producto.id}>{producto.nombre}</Link></td>
        })}
      </ul>
    </>
  )
}

export default Productos
