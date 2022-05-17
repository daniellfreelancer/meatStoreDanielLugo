import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';


import sCart from './sCart.svg';

const CartW = () => {

    const {cantidad, carrito} =useContext(GlobalContext)
    let cantidadCArt = 0;

    carrito.map((cantidad) => {
        cantidadCArt = cantidadCArt + cantidad.stock;
    })


  return (

   
      <div>
          <form className="d-flex">              
              <Link to ="/Cart"> <img src={sCart} /></Link>
              <p className="item-count">{cantidadCArt}</p>
          </form>
      </div>

  )
}

export default CartW