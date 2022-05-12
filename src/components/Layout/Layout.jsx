import React from 'react'
import { Outlet } from 'react-router-dom';
import FooterComp from '../Footer/FooterComp';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <>
        <header>
          <Navbar/>
        </header>

      
         
        
       <Outlet/>
       <FooterComp/>
    </>
  )
}

export default Layout