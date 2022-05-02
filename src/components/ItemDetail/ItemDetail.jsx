import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import imgItem from '../../Assets/imgItem.svg';
import imgPin from '../../Assets/logoPin8.svg';



const Card = ({ product }) => {
  return (

      <div className="itemCart">
          <div className="card" style={{ width: "300px" }}>
              <div className="badgeContainer">
                  <img src={imgPin} style={{ width: "70px" }} className="imgBadge" />
              </div>
              <img src={ product.imgProduct || imgItem} class="card-img-top" alt="ImgProduct" />
              <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"> Weight: {product.weight}</p>
                  <p className="card-text">$ {product.price}</p>               
                  <div className=" d-flex justify-content-center p-1">
                      <ItemCount />
                  </div>
                  <div className=" d-flex justify-content-center">
                      <a href="#" className="btn btnAddCart text-align-center">Add to cart</a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card