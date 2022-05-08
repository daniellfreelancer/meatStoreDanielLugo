import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { data } from '../Products/itemProducts';
import './itemListContainer.css';

const ItemListContainer = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const promes = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000)
    })
    promes.then((res)=> {
      setProduct(res)
  })
    return () => {
      
    }
  }, [])
  
  return (
    <div className="container-fluid itemList">
      {<ItemList product={product}/>}
    </div>
  )
}

export default ItemListContainer