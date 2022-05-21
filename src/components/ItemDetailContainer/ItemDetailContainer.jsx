import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { data } from '../Products/itemProducts'
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../service/Firebase';


const ItemDetailContainer = () => {

    const {id} = useParams();

    const [product, setProduct] = useState([])
    const getItem = async () => {
      const colItem = doc(db, 'products', id);
      try {

        const docItem = await getDoc(colItem);
        setProduct({ id: docItem.id, ...docItem.data() });

      } catch (err) {
        console.error(err);
      }

    }

    useEffect(async () => {
      getItem();

    }, [setProduct]);
    

  return (
    <div className="container">
      
       { product ? 
       <ItemDetail product={product} {...product} /> :
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        }
    </div>
  )
}

export default ItemDetailContainer