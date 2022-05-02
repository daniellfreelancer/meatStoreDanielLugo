import React, { useEffect, useState } from 'react'
import Card from '../ItemDetail/ItemDetail';
import { getProduct } from '../ItemDetailContainer/ItemDetailContainer';
import './ItemList.css';


const ItemList = () => {

  const [listaProducts, setListaProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{

    setIsLoading(true);

    getProduct()
    .then((result)=> setListaProducts(result))
    .catch((error)=> console.log(error))
    .finally(()=> setIsLoading(false));

  },[]);

  return (
    <div className="itemList">
              
    {listaProducts.map((product) =>{

      return <Card key={product.id} product={product} />
    })}

    </div>
  )
}

export default ItemList