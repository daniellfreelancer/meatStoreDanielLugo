import React from 'react'
import sliderOne from '../../Assets/sliderOne.png';
import sliderTwo from '../../Assets/sliderTwo.png';
import sliderThree from '../../Assets/sliderThree.png';
import sliderFour from '../../Assets/sliderFour.png';
import './Sliders.css';

const Sliders = () => {
  return (

      <div id="carouselExampleControls" className="carousel slide container sliderMeatStore" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src={sliderOne} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={sliderTwo} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={sliderThree} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                  <img src={sliderFour} className="d-block w-100" alt="..."/>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  )
}

export default Sliders