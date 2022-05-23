import React, { useContext, useState, useEffect } from 'react'
import cartEmpty from '../../Assets/cartEmpty.png';
import './Cart.css'
import { Link, NavLink } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';
import { BsPhone } from 'react-icons/bs'
import { AiOutlineDelete, AiOutlineFileProtect} from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'

import { FiType} from 'react-icons/fi'

const Cart = ({product}) => {
  const { cantidad, carrito, eliminarProducto, vaciarCart, total } = useContext(GlobalContext) //el nombre del context a consumir, el proveedor





  return (
    <>
      <div className="container text-end p-2">
        <Link className="btn btn-primary" to="/">
          Keep Buying
        </Link>
      </div>
      <h1 className="container text-center title-cart bg-info p-1 card-header">
        My cart
      </h1>
      {carrito.length >= 0 ? (
        carrito.map((prod, index) => {
          return (
            <>
              <div
                className="bg-light container containerCheck p-2"
                key={index}
              >
                {/* Card Checkout */}
                <div class="card text-center">
                  <div class="card-header">Product: {prod.title}</div>
                  <div class="card-body">
                    <div className="deleteButton">
                      <button
                        onClick={() => eliminarProducto(prod.id)}
                        className="btn btn-danger p-1 m-1"
                      >
                        {" "}
                        <AiOutlineDelete />
                      </button>
                    </div>
                    <img
                      src={prod.img}
                      class="card-img-top card-img"
                      style={{ width: "25%" }}
                      alt="Product Image"
                    />
                    <h5 class="card-title">Weight: {prod.weight}</h5>
                    <p class="card-text">
                      <h3 className="fs-1 text-dark mt-3 fw-bold">
                        Price: $ {prod.price}
                      </h3>
                    </p>
                    {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                  </div>
                  <div class="card-footer text-muted">
                    Quantity: {prod.stock}
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div className="container containerCartEmpty">
          <img src={cartEmpty} alt="EmptyCart" className="imgCartEmpty" />
        </div>
      )}
      
      <div className="container text-end bg-info p-1">
        {/* Formulario */}
        <div className="bg-light p-2">
          <h2 className="text-center">
            {" "}
            <AiOutlineFileProtect /> Your Invoice Data
          </h2>
          <form class="row g-3">

            {/* Start Name */}
            <div class="col-md-4">
              <label for="validationServerUsername" class="form-label">
                Full Name
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">
                  {" "}
                  <FiType/>{" "}
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            {/* end Name */}

            {/* start email */}
            <div class="col-md-4">
              <label for="validationServerUsername" class="form-label">
                E-mail
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">
                  {" "}
                  <MdAlternateEmail />{" "}
                </span>
                <input
                  type="e-mail"
                  class="form-control"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  placeholder="Your e-mail"
                  required
                />
              </div>
            </div>
            {/* end email */}

            {/* start Phone */}
            <div class="col-md-4">
              <label for="validationServerUsername" class="form-label">
                Phone
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">
                  {" "}
                  <BsPhone />{" "}
                </span>
                <input
                  type="phone"
                  class="form-control"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            {/* end Phone */}

            <div class="col-12">
              <button class="btn btn-success" type="submit">
                Finish Buy
              </button>
            </div>
          </form>
        </div>
        <h2>Total Pay: $ {total}</h2>
      </div>

      {carrito.length > 0 ? (
        <div className="container text-end p-2">
          <button
            className="btn btn-primary"
            onClick={() => vaciarCart(carrito)}
          >
            Empty my Cart
          </button>
        </div>
      ) : (
        <div className="container text-end p-2">
          <Link className="btn btn-primary" to="/">
            Keep Buying
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart