import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartW from '../CartWidget/CartW';
import logo2 from './LogoMeatStore.svg';

const Navbar = () => {




    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
            <div className="container">
                <NavLink to="/">
                    <img src={logo2} className="navbar-brand" width='100px' alt="LogoMeatstore" />
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Category Start */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                        <div class="dropdown">
                            
                            <a class=" btn btnDrop dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li className="navDrop">
                                    <NavLink to="/category/Plant-based"className="nav-link navDrop">Based Plants</NavLink>                                    
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/category/Red-meat"className="nav-link navDrop">Red Meat</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/category/White-meat"className="nav-link navDrop">White Meat</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/category/Sea-food"className="nav-link navDrop">Sea Food</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* Category End */}
                        <li className="nav-item">
                            <NavLink to='/error' className="nav-link">Our Store</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/error' className="nav-link">How to Buy</NavLink>                            
                        </li>
                        <li className="nav-item">
                            <NavLink to='/error' className="nav-link">Our Service</NavLink>                            
                        </li>
                        <li className="nav-item">
                            <NavLink to='/error' className="nav-link">Social Media</NavLink>                            
                        </li>
                    </ul>                  
                    <CartW />
                </div>
            </div>
        </nav>


    )
}

export default Navbar;


