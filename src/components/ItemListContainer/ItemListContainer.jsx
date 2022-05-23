import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';
import GoBack from '../Buttons/GoBack';
import ItemList from '../ItemList/ItemList';
import { data } from '../Products/itemProducts';
import './itemListContainer.css';
import { db } from '../../service/Firebase';
import { doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { async } from '@firebase/util';


const ItemListContainer = () => {
  const {cat} = useParams()
  const [product, setProduct] = useState([])


  const getDAta = async () => {

    const col = collection(db, 'products');



    const i = cat ? query(col,where ('category', '==', cat)) : col
    getDocs(i)
    .then((items) => {
      setProduct(items.docs.map((doc) =>({id:doc.id, ...doc.data()})))
    }).finally(()=>{

    })


    // try { 
    //   const data = await getDocs(col)
    //   const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
    //   setProduct(result)
      
    // } catch (error) {
    //   console.log(error)
      
    // }

  };

  useEffect( () => {  
    getDAta();
    // const item = doc(db,'products', 'ZAuH4NZhl9MkNYoQlUe9');

    // getDoc(item).then((snapshot) => {
    //   if(snapshot.exists()){
    //     setProduct([...product, {id:snapshot.id, ...snapshot.data()}])
    //   }
    // }

  //   const promes = new Promise((resolve, reject) => {
      
  //       const colec = collection(db, 'products', cat);
  //        let filterData = colec
  //        if(cat === 'Plant-based') {filterData = data.doc.filter((doc => doc.category === 'Plant-based'))}
  //        if(cat === 'Red-meat') {filterData = data.doc.filter((doc => doc.category === 'Red-meat'))}
  //        if(cat === 'White-meat') {filterData = data.doc.filter((doc => doc.category === 'White-meat'))}
  //        if(cat === 'Sea-food') {filterData = data.doc.filter((doc => doc.category === 'Sea-food'))}
  //        resolve(filterData);
      
  //    })
  //    promes.then((res)=> {
  //      setProduct(res)
  //  })
  //   return () => {
      
  //    }
  }, [cat])
  
  return (
    <div className="container-fluid itemList">
      { product ? 
       <ItemList product={product}/>  : <Loader/>
    
    }
       
    </div>
  )
}

export default ItemListContainer