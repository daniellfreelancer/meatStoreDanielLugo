import React from 'react'
import CartW from '../CartWidget/CartW';
import logo2 from './LogoMeatStore.svg';

const Navbar = () => {




    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
            <div className="container">
                <img src={logo2} className="navbar-brand" width='100px' alt="LogoMeatstore" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Based Plants</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Red Meat</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">White Meat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sea Food</a>
                        </li>

                    </ul>
                    

                    <CartW />
                </div>
            </div>
        </nav>


    )
}

export default Navbar;


