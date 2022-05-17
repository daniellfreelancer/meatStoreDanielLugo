import React, { useContext } from 'react'
import cartEmpty from '../../Assets/cartEmpty.png';

import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';


const Cart = () => {
  const { cantidad, carrito, eliminarProducto, vaciarCart, total } = useContext(GlobalContext) //el nombre del context a consumir, el proveedor
    console.log(carrito.cantidad)

    

  return (
    <>
    <h1 className="container text-center title-cart">My cart</h1>
      {carrito.length > 0 ? carrito.map((prod, index) => {

        return (
          <div className="bg-light container" key={index}>
            <div className="text-center">
              <img src={prod.img} alt="Imagen del producto" style={{ width: '50%' }} />
            </div>
            <div>
              <p className="text-end"> QTY: {prod.stock}</p>
              <h3 className="card-title"> Product: {prod.title}</h3>
              <p className="card-text"> Weight: {prod.weight}</p>
              <h3 className="fs-1 text-dark mt-3 fw-bold">Price: $ {prod.price}</h3>
              <button onClick={() => eliminarProducto(prod.id)}className="btn btn-danger p-1 m-1"> Delete Product</button>
            </div>

          </div>
        )
      }) :
      
        <div className="container" >
          <img src={cartEmpty} alt="" />

        </div>
      
         
      }
      <div className="container text-end bg-info p-1" >
        <h2>Total Cart: $ {total}</h2>
      </div>
      

      {carrito.length > 0 ? (
                <div className="container text-end p-2" >
                  <button className="btn btn-primary" onClick={() => vaciarCart(carrito)}>Empty my Cart</button>
                </div>
               

                ) : (
                  <div className="container text-end p-2">
                    <Link className="btn btn-primary" to="/">Back to Home</Link>
                  </div>
                  
                )}
    </>
  )
}

export default Cart