import React, { useContext, useEffect, useState } from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import imgItem from '../../Assets/imgItem.svg';
import imgPin from '../../Assets/logoPin8.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/CartContext';




const Card = ({ product:{title, description, weight, price, imgProduct, category, stock, id} }) => {

    const { carrito, agregarCarrito } = useContext(GlobalContext)

    const [cantidadComprada, setCantidadComprada] = useState(0)
    const quantityToAdd = (cantidad) => {
    setCantidadComprada(cantidad)
    carrito.cantidad = quantityToAdd
}

const [state, setState] = useState({

})
useEffect(() => {
    setState({title, description, weight, price, imgProduct, category, stock, id,cantidadComprada})
  }, [imgProduct])

  const itemCarro = {
    id:id,
    img:imgProduct, 
    price:price,
    category:category,
    stock:cantidadComprada,
    weight: weight,
    title:title,
    description:description,

}

return (
  <section className="container">
    <div className="itemCart">
      <div className="card" style={{ width: "300px" }}>
        <div className="badgeContainer">
          <img src={imgPin} style={{ width: "70px" }} className="imgBadge" />
        </div>

        <img
          src={imgProduct || imgItem}
          class="card-img-top"
          alt="ImgProduct"
        />

        <div className="card-body">
          <h3 className="card-title"> Product: {title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text"> Weight: {weight}</p>
          <p className="card-text">Price: $ {price}</p>
          <p className="card-text">Category: {category}</p>
          <p className="card-text">Just  {stock} units left </p>
        </div>

        {cantidadComprada > 0 ? (
          <Link to={"/cart"} onClick={() => agregarCarrito(itemCarro)} className="btn btn-success text-light"> Go to Pay </Link>
        ) : (
          <ItemCount onAdd={quantityToAdd} stock={stock} />
        )}

      </div>
    </div>
  </section>
);
}

export default Card