import React,{Component} from "react";

class Section5 extends Component {

  render(){
    return (
       <div className="container my-5">
        <div className="row g-5 d-flex justify-content-between">
          <div className="col-12 col-sm-12 col-md-4 sec5-one">
          <div className="mt-5 ms-2">
          <h6>New Arrivals</h6>
          <h4 className="fw-bold">Smart Mobile</h4>
          <h4 className="fw-bold">15% OFF</h4>
          <button >Shop Now</button>
          </div>
          </div>

          <div className="col-12 col-sm-12 col-md-4 sec5-two">
          <div className="mt-5 ms-2 text-white">
          <h6 className="">Big Deals</h6>
          <h4 className="fw-bold">Get Save 35%</h4>
          <h4 className="fw-bold ">Less</h4>
          <button className="">Shop Now</button>
          </div>
          </div>


          <div className="col-12 col-sm-12 col-md-4  sec5-three">
          <div className="mt-5 ms-2 text-white">
          <h6>Collection-2020</h6>
          <h4 className="fw-bold">Smart Watches</h4>
          <button >Shop Now</button>
          </div>
          </div>


        </div>
       </div>
    )
  }
}

export default Section5