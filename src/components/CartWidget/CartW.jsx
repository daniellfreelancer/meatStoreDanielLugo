import React from 'react'
import sCart from './sCart.svg';

const CartW = (cantidadItem,contar) => {
    
    cantidadItem = 0;

  return (

   
      <div>
          <form className="d-flex">
              {/* <a className="nav-link button-style" href="#">LOGIN</a> */}
              <img src={sCart} />
              <p className="item-count">{cantidadItem}</p>
          </form>

      </div>

  )
}

export default CartW