import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Index from '../Index/Index'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Layout from '../Layout/Layout'

const Routs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="item-detail/:id" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routs