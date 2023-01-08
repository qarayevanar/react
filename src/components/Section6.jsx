import React,{Component} from "react";

import sec6big from '../img/sec6big.jpg';
import sec6big1 from '../img/sec6big1.jpg';
import sec6big2 from '../img/sec6big2.jpg';
import sec6big3 from '../img/sec6big3.jpg';
import sec6bigm from '../img/sec6bigm.webp';
import sec6bigm1 from '../img/sec6bigm1.jpg';
import sec6bigm2 from '../img/sec6bigm2.jpg';
import sec6bigm3 from '../img/sec6bigm3.jpg';
import sec6bigc from '../img/sec6bigc.jpg';
import sec6bigc1 from '../img/sec6bigc1.jpg';
import sec6bigc2 from '../img/sec6bigc2.jpg';
import sec6bigc3 from '../img/sec6bigc3.jpg';
import oneplus from '../img/oneplus.webp';
import oneplus1 from '../img/oneplus1.jpg';
import oneplus2 from '../img/oneplus2.jpg';
import oneplus3 from '../img/oneplus3.jpg';

class Section6 extends Component {

  render(){
    return (
       <div className="container">
        <div className="row my-4">
          <div className="col-12">
            <h2>Best Sellers</h2>
          </div>
        </div>
        <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '18rem'}}>
              <img src={sec6big} className="card-img-top border" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <img src={sec6big1} alt="" className="border"/>
                  <img src={sec6big2} alt="" className="border"/>
                  <img src={sec6big3} alt="" className="border"/>
                </div>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h6 className="card-title mt-2">Videocamera</h6>
                <p className="card-text">$225.00</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <button className="sec6-btn me-3">+ Add to card</button> <button className="sec6-btn"><i class="fa-solid fa-eye"></i></button>
              </div>
            </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '18rem'}}>
              <img src={sec6bigm} className="card-img-top border" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <img src={sec6bigm1} alt="" className="border"/>
                  <img src={sec6bigm2} alt="" className="border"/>
                  <img src={sec6bigm3} alt="" className="border"/>
                </div>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h6 className="card-title mt-2">Apple Ipad</h6>
                <p className="card-text">$425.00</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <button className="sec6-btn me-3">+ Add to card</button> <button className="sec6-btn"><i class="fa-solid fa-eye"></i></button>
              </div>
            </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '18rem'}}>
              <img src={sec6bigc} className="card-img-top border" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <img src={sec6bigc1} alt="" className="border"/>
                  <img src={sec6bigc2} alt="" className="border"/>
                  <img src={sec6bigc3} alt="" className="border"/>
                </div>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h6 className="card-title mt-2">Powerbank 1130 mAh Black</h6>
                <p className="card-text">$125.00</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <button className="sec6-btn me-3">+ Add to card</button> <button className="sec6-btn"><i class="fa-solid fa-eye"></i></button>
              </div>
            </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '18rem'}}>
              <img src={oneplus} className="card-img-top border" alt="..." />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <img src={oneplus1} alt="" className="border"/>
                  <img src={oneplus2} alt="" className="border"/>
                  <img src={oneplus3} alt="" className="border"/>
                </div>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h6 className="card-title mt-2">OnePlus 8</h6>
                <p className="card-text">$625.00</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '35%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <button className="sec6-btn me-3">+ Add to card</button> <button className="sec6-btn"><i class="fa-solid fa-eye"></i></button>
              </div>
            </div>
        </div>
        </div>
       </div>
    )
  }
}

export default Section6