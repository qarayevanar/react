import React,{Component} from "react";
import sec8c2 from '../img/sec8c1back.jpg'
import sec8c1 from '../img/sec8c1front.jpg'
import sec8c3 from '../img/sec8c2back.jpg'
import sec8c4 from '../img/sec8c2front.jpg';
import sec8c5 from '../img/sec8c3back.jpg';
import sec8c6 from '../img/sec8c3front.jpg'
import s9 from '../img/s9-front.jpg';
import s9back from '../img/s9-back.jpg';
import head from '../img/head.jpg'
import ipad1 from '../img/ipad-front.jpg';
import ipad2 from '../img/ipad-back.jpg'









class Section4 extends Component {

  render(){
    return (
       <div className="container ">
        <div className="row my-5 g-5">
          <div className="col-12">
            <h3 className="text-start h3">New Products</h3>
          </div>
        </div>
          <div className="row g-4">
          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1  ">
              <img src={sec8c2} alt="" className="sback align-center" />
              <img src={sec8c1} alt=""  className="sfront"  />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h5>Werocool ENS2378</h5>
                <h6 className="mb-3">$219.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1  ">
              <img src={sec8c3} alt="" className="sback" />
              <img src={sec8c4} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h5>Refrigerator</h5>
                <h6 className="mb-3">$700.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-2 ">
          <div className="  ">
              <img src={head} alt="" className="sback" />
              {/* <img src={head} alt=""  className="sfront" /> */}
            </div>
            <div className="">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h5>Headphone</h5>
                <h6 className="">$200.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1">
              <img src={s9back} alt="" className="sback" />
              <img src={s9} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h4>Samsung S9</h4>
                <h6 className="mb-3">$500.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>
          
          





          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1">
              <img src={sec8c5} alt="" className="sback" />
              <img src={sec8c6} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h5>Camera C430W 4k</h5>
                <h6 className="mb-3">$1519.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1 ">
              <img src={ipad2} alt="" className="sback" />
              <img src={ipad1} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h4>Apple Ipad</h4>
                <h6 className="mb-3">$519.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          </div>
       </div>
    )
  }
}

export default Section4