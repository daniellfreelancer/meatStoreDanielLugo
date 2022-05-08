import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { data } from '../Products/itemProducts'



const ItemDetailContainer = () => {

    const {id} = useParams();

    const [product, setProduct] = useState([])
    
    const filterNew = data.find((prod) => prod.id === Number(id))

    useEffect(() => {
     const promes = new Promise((resolve, reject) => {
         setTimeout(()=> {
             resolve(filterNew)
         },)
     })

     promes.then((res) => {
         setProduct(res)
     })
     .then (() => console.log(product))
     .catch((err) => console.log(err))
    
      return () => {}
    }, [])
    

  return (
    <div className="bodyElement">
       { product ? <ItemDetail product={product}/> : <h3>Loading ...</h3>} 
    </div>
  )
}

export default ItemDetailContainer