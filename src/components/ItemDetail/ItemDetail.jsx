import React, { useState } from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import imgItem from '../../Assets/imgItem.svg';
import imgPin from '../../Assets/logoPin8.svg';
//import {count} from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';



const Card = ({ product:{title, description, weight, price,imgProduct} }) => {

    const [addToCart, setAddToCart] = useState(0)

    const qtyOnAdd = (stock) => {
        setAddToCart(stock)
    }


  return (

      <div className="itemCart">
          <div className="card" style={{ width: "300px" }}>
              <div className="badgeContainer">
                  <img src={imgPin} style={{ width: "70px" }} className="imgBadge" />
              </div>
              <img src={ imgProduct || imgItem} class="card-img-top" alt="ImgProduct" />
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"> Weight: {weight}</p>
                  <p className="card-text">$ {price}</p>  

                  {addToCart > 0 ? (
                      <Link to={'/cart'} className='btn btn-success text-light' >Go to Cart</Link>
                  ) : (
                      <ItemCount onAdd={qtyOnAdd} />
                  )}
              </div>
          </div>
      </div>
  )
}

export default Card