import React from 'react'
import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
import imgItem from '../../Assets/imgItem.svg';
import imgPin from '../../Assets/logoPin8.svg';



const Card = () => {
  return (

      <div className="itemCart">
          <div className="card" style={{ width: "300px" }}>
              <div className="badgeContainer">
                  <img src={imgPin} style={{ width: "70px" }} className="imgBadge" />
              </div>
              <img src={imgItem} class="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Item title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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