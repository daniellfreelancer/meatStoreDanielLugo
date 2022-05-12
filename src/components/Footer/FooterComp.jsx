import React from 'react'
import './FooterComp.css';
import {SiFacebook, SiTwitter, SiInstagram} from 'react-icons/si';

const FooterComp = () => {



  return (  
    
   
    <div className="footerArea">
      <div className='container footArea'>
      <div className="  p-3">              
              <p className="text">2022 Copyright © 
              
              </p>
          </div>

          <div className='footIcons'>
          
          <SiFacebook className='social-icon' style={{ color: "#4df5fd", fontSize:"30px", margin: "10px" }}/>
          <SiTwitter className='social-icon' style={{ color: "#4df5fd", fontSize:"30px", margin: "10px" }}/>
          <SiInstagram className='social-icon' style={{ color: "#4df5fd", fontSize:"30px", margin: "10px" }}/>
            
          </div>

      </div>

    </div>
    



)

}


export default FooterComp