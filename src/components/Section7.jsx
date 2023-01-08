import React,{Component} from "react";

class Section7 extends Component {

  render(){
    return (
       <div className="container my-5">
        <div className="row  ">
          <div className="col-12 col-sm-12 col-md-6 sec7-one ">
              <div className="mt-5 me-4 text-white  text-end">
                <h6>Big Discount</h6>
                <h4 className="fw-bold">Latest Sport's</h4>
                <h4 className="fw-bold">Accessories</h4>
                <button >Shop Now</button>
              </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 sec7-two">
              <div className="mt-5 me-4 text-dark text-end">
                <h6 className="">Save 35% - 45% OFF</h6>
                <h4 className="fw-bold">Smart TV With</h4>
                <h4 className="fw-bold ">High Quality</h4>
                <button className="">Shop Now</button>
              </div>
          </div>
        </div>
       </div>
    )
  }
}

export default Section7