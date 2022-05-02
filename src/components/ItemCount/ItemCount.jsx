import './itemCount.css';
import { useState } from 'react';

import { stock } from '../ItemDetail/ItemDetail';

import React from 'react'

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
    <div className="itemCount">
        <button onClick={minus} className="btn btn-dark">-</button>
        <p>{count}</p>
        <button onClick={add} className="btn btn-dark">+</button>

    </div>
  )
}

export default ItemCount