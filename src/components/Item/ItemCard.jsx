import React from 'react'
import { Link } from 'react-router-dom'
import imgPin from '../../Assets/logoPin8.svg';
import imgItem from '../../Assets/imgItem.svg';


const ItemCard = ({product}) => {

    const {id, title, description, weight, price, imgProduct} = product

    return (

        <div className="itemCart">
            <div className="card" style={{ width: "300px" }}>
                <div className="badgeContainer">
                    <img src={imgPin} style={{ width: "70px" }} className="imgBadge" />
                </div>
                <img src={ imgProduct || imgItem} class="card-img-top" alt="ImgProduct" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> price: $ {price}</p>
                    {/* <p className="card-text">{description}</p>
                    
                    <p className="card-text">$ {price}</p>                */}
                    {/* <div className=" d-flex justify-content-center p-1">
                        <ItemCount />
                    </div> */}
                    <div className=" d-flex justify-content-center">
                        <Link to = {`item-detail/${id}`}><a className="btn btnAddCart text-align-center">Check it</a></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard