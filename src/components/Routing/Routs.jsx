import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Error from '../Error/Error'
import Index from '../Index/Index'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Layout from '../Layout/Layout'


const Routs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path='/category/:cat' element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="item-detail/:id" element={<ItemDetailContainer />} />
            <Route path="/error" element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routs