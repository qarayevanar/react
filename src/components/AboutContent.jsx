import React, { Component } from 'react';
import aboutimg from '../img/About1.jpg';
import aboutimg1 from '../img/About2.jpg';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg'


 class AboutContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-12 col-md-6">
            <img src={aboutimg} alt=""/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 p-5">
            <h3 className='fw-bold'>Awesome Work With <br /> Our Company</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Eaque, minima.</p>
            <p><i class="fa-solid fa-check me-2"></i>Credibly innovate granular internal</p>
            <p><i class="fa-solid fa-check me-2"></i>Grantedly underconstructions reloaded</p>
            <p><i class="fa-solid fa-check me-2"></i>Completely synergize resource taxing relationships</p>
            <button className='about-btn'>Read More</button>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 col-sm-12 col-md-6 p-5">
            <h3 className='fw-bold'>Awesome Smart Watch <br /> Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Eaque, minima.</p>
            <p><i class="fa-solid fa-check me-2"></i>Credibly innovate granular internal</p>
            <p><i class="fa-solid fa-check me-2"></i>Grantedly underconstructions reloaded</p>
            <p><i class="fa-solid fa-check me-2"></i>Completely synergize resource taxing relationships</p>
            <button className='about-btn'>Read More</button>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <img src={aboutimg1} alt=""/>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <h2>Our Team Members</h2>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-12 col-sm-6 col-md-3">
            <img src={team1} alt="" />
            <h4 className='text-center my-2'>Johen Deceno</h4>
            <h6 className='text-center'>Web Developer</h6>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
          <img src={team2} alt="" />
            <h4 className='text-center my-2'>Rubina Marina</h4>
            <h6 className='text-center'>Co-Founder</h6>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
          <img src={team3} alt="" />
            <h4 className='text-center my-2'>Monoj Malik</h4>
            <h6 className='text-center'>Front-end</h6>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
          <img src={team4} alt="" />
            <h4 className='text-center my-2'>Martina Modi</h4>
            <h6 className='text-center'>Graphic Designer</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContent