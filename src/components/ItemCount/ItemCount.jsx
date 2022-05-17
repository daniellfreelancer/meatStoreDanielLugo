import './itemCount.css';
import { useState } from 'react';
import { stock } from '../ItemDetail/ItemDetail';
import React from 'react'
import { Link } from 'react-router-dom';


const ItemCount = ({onAdd, stock, initialValue}) => {


    const [cantidad, setCantidad] = useState(1)
  
    
    
    function sumar(initialValue){
      cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad)
    }
    function restar(initialValue){
     cantidad > 1 ? setCantidad (cantidad - 1) : setCantidad(cantidad)
    }
  
  
  
    return (
      <>
        <div>
          <div className="itemCount">
            <button onClick={restar} className="btn btn-dark">
              -
            </button>
            <p>{cantidad}</p>
            <button onClick={sumar} className="btn btn-dark">
              +
            </button>
          </div>

          <div className="itemCount">
            <Link
              to=""
              onClick={() => onAdd(cantidad)}
              className="btn btnAddCart text-align-center"
            >
              Add 
            </Link>
          </div>
        </div>

      </>
    );
  }
  

export default ItemCount