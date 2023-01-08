import React,{Component} from "react";
import s9 from '../img/s9-front.jpg';
import s9back from '../img/s9-back.jpg';
import head from '../img/head.jpg'
import ipad1 from '../img/ipad-front.jpg';
import ipad2 from '../img/ipad-back.jpg'
import watch from '../img/watch-back.jpg'
import watch1 from '../img/watch-front.jpg'
import laptop2 from '../img/laptop2.jpg';
import laptop1 from '../img/laptop1.jpg';
import airpods2 from '../img/airpods2.jpg';
import airpods1 from '../img/airpods.jpg';









class Section4 extends Component {

  render(){
    return (
       <div className="container ">
        <div className="row my-5">
          <div className="col-12">
            <h3 className="text-start h3">Featured Products</h3>
          </div>
        </div>
          <div className="row g-4">
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
                <h4>Headphone</h4>
                <h6 className="">$200.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1  ">
              <img src={ipad2} alt="" className="sback" />
              <img src={ipad1} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h4>Apple IPad </h4>
                <h6 className="mb-3">$300.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1  ">
              <img src={watch} alt="" className="sback" />
              <img src={watch1} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h4>Smartwatch Wifi</h4>
                <h6 className="mb-3">$519.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1">
              <img src={laptop2} alt="" className="sback" />
              <img src={laptop1} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h4>Asus Laptop</h4>
                <h6 className="mb-3">$1519.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-2 ">
            <div className="card1 ">
              <img src={airpods2} alt="" className="sback" />
              <img src={airpods1} alt=""  className="sfront" />
            </div>
            <div className="c1-text">
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <h4>Apple Airpods</h4>
                <h6 className="mb-3">$319.00</h6>
                <button className="c1-btn me-3">+ Add to card</button> <button className="c1-btn"><i class="fa-solid fa-eye"></i></button>
            </div>
          </div>

          </div>
       </div>
    )
  }
}

export default Section4