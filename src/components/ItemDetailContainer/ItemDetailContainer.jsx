import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { data } from '../Products/itemProducts'
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../service/Firebase';


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [item,setItem] = useState()
    const [loading, setLoading] = useState()


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

      const myProduct = doc(db, 'products', id)
      getDoc(myProduct)
      .then((prod)=> {
        setProduct({id:prod.id, ...prod.data()})
      }).finally(()=>{
        
      })
    }, [id]);
    



  return (
    <div className="container">
      {/* {
        loading
        ? <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        : <ItemDetail product={product} {...product} />
      } */}



      
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