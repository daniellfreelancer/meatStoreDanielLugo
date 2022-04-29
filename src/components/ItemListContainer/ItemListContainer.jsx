import React from 'react'
import Card from '../Card/Card'
import ItemList from '../ItemList/ItemList';

import './itemListContainer.css';

const ItemListContainer = () => {

    
  return (
    <div className="container-fluid itemList">
      <ItemList/>
    </div>
  )
}

export default ItemListContainer