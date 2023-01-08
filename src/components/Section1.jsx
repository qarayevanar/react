import React, { Component } from 'react';


import slide from '../img/slider.jpg';
import slide2 from '../img/slider2.jpg';



 class Section1 extends Component {
  render() {
    return (
      <div className="container my-5 ">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-9 ">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active position-relative car">
                              <div className='position-absolute pt-5 ps-5 mt-5'>
                                <h4>Save 35%-55% Weekly</h4>
                                <h1>Clearance Sale -</h1>
                                <h1 className='text-start'>20% OFF</h1>
                                <button className='sec1btn'>Shop Now</button>
                              </div>
                              <img src={slide} className="d-block w-100" alt="..." />
                              
                            </div>
                            <div className="carousel-item active position-relative car">
                              <div className='position-absolute pt-5 ps-5 mt-5 text-white'>
                                <h4>Best Wireless Charger</h4>
                                <h1 className='text-start'>2021 - Limited </h1>
                                <h1 className=''>Edition Collection</h1>
                                <button className='sec2btn'>Shop Now</button>
                              </div>
                              <img src={slide2} className="d-block w-100" alt="..." />
                              
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>

                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="col g-2">
                      <div className='sec1-one py-5 mb-4 px-3  text-white'>
                          <h6 className='mt-4'>New Sale</h6>
                          <h3>Smart Watch</h3>
                          <button className='sec1btn'>Shop Now</button>
                      </div>

                      <div className='sec1-two   text-center '>
                        <h6 className=''>New Arrivals</h6>
                        <h3>Greatest Camera</h3>
                        <button className='sec1btn'>Save 20%</button>
                      </div>
                  </div>
                </div>
              </div>
      </div>
    )
  }
}

export default Section1