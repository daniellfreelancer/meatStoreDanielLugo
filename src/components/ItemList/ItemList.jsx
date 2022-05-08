import React, { useEffect, useState } from 'react'
import './ItemList.css';
import ItemCard from '../Item/ItemCard';

const ItemList = ({product}) => {

  return (
    <div className="itemList">              
     {product.length > 0 ? (product.map((product) => (<ItemCard key={product.id} product={product}/>))) : (<h3>Loading ...</h3>)}
    </div>

  )
}


export default ItemList