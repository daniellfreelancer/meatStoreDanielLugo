import React, { useEffect, useState } from 'react'
import './ItemList.css';
import ItemCard from '../Item/ItemCard';
import Sliders from '../Sliders/Sliders';

const ItemList = ({product}) => {

  return (
    <div className="itemList container">
              
     {product.length > 0 ? 
     (product.map((product) => (<ItemCard key={product.id} product={product}/>))) :
      (
        <div className="spinner-border  spinnerLoading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>

  )
}


export default ItemList