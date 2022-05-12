import './itemCount.css';
import { useState } from 'react';
import { stock } from '../ItemDetail/ItemDetail';
import React from 'react'
import { Link } from 'react-router-dom';


const ItemCount = ({stock, initialValue, onAdd}) => {

    const [count,setCount] = useState(1);

    stock = 10;
    
    const add = (initialValue) => {
        if(count < stock)
        setCount(count + 1)
    }

    const minus = (initialValue) => {
        if(count > 1){
            setCount(count - 1)
        }

    }

  return (

    <div >
          <div className="itemCount">
              <button onClick={minus} className="btn btn-dark">-</button>
              <p>{count}</p>
              <button onClick={add} className="btn btn-dark">+</button>

          </div>       

        <div className="">
            <Link to="" onClick={ () => onAdd(count)} className="btn btnAddCart text-align-center">add to cart</Link>
        </div>

    </div>
  )
}

export default ItemCount