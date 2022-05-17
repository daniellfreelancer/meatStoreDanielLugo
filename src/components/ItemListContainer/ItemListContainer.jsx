import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';
import GoBack from '../Buttons/GoBack';
import ItemList from '../ItemList/ItemList';
import { data } from '../Products/itemProducts';
import './itemListContainer.css';

const ItemListContainer = () => {

  const {cat} = useParams()

  const [product, setProduct] = useState([])

  useEffect(() => {
    const promes = new Promise((resolve, reject) => {
      setTimeout(() => {

        

        let filterData = data

        if(cat === 'Plant-based') {filterData = data.filter((category => category.category === 'Plant-based'))}
        if(cat === 'Red-meat') {filterData = data.filter((category => category.category === 'Red-meat'))}
        if(cat === 'White-meat') {filterData = data.filter((category => category.category === 'White-meat'))}
        if(cat === 'Sea-food') {filterData = data.filter((category => category.category === 'Sea-food'))}

        resolve(filterData);
      },)
    })
    promes.then((res)=> {
      setProduct(res)
  })
    return () => {
      
    }
  }, [data])
  
  return (
    <div className="container-fluid itemList">
      { product ? 
       <ItemList product={product}/>  : <Loader/>
    
    }
       
    </div>
  )
}

export default ItemListContainer