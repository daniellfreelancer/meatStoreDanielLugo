import React from 'react';
import  logoms2 from './logoms2.svg';
import userIcon from './userIcon.png';
import cartIcon from './cartIcon.png';

function NavigatorMenu(){

    return (
        <nav className="container">
            <div className=" container-fluid items-menu">                
                <img className="navbar-brand" width='100px' src={logoms2} alt="LogoMeatstore"/>
                
                <ul className="navs-item">
                    <li>Based Plants</li>
                    <li>Red Meat</li>
                    <li>White Meat</li>
                    <li>Sea Food</li>
                    <div className="icon-items">                        
                        <button className="btn">
                            Login
                        </button>
                        <img  width='36' height='36' src={userIcon} alt="LogoUser"/>
                    </div>                        
                </ul>
            </div>
        </nav>

    )
}

export default NavigatorMenu;