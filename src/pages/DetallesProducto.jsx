import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function DetallesProducto() {
  
  const {VITE_HOST} = import.meta.env;

    let {id} = useParams();

    const [producto, setProducto] = useState({})
    
    useEffect(()=>{



        const controller = new AbortController()

        const options = {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            signal:controller.signal
        }


        fetch( VITE_HOST + 'productos/detalleProducto?id=' + id, options)
        .then(res => res.json())
        .then(data => setProducto(data))
        .catch(err => console.log(err))
        .finally(()=>controller.abort())
        
    },[]);

    let navigate = useNavigate();

    function siguiente(){
      navigate('/productos/' + (parseInt(id) + 1))
      location.reload()
    }


  return (
    <>
    
    <div className='container-slide'>
      <div className='slide-container'>
        <div className='slide-content'>
          <div className='card-wrapper'>
            <div className='card'>
              <div className='image-content'>
                <span className='overlay'>{producto.precio} €</span>
              </div>
              <div className="card-content">
                <h2 className='name'>{producto.nombre}</h2>
                <p className="description">{producto.descripcion}</p>
                <button className='button' onClick={siguiente}>Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DetallesProducto
