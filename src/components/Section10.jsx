import React,{Component} from "react";

class Section10 extends Component {
  render(){
    return(
      <div className="container-fluied bgsec my-3">
        <div className="container my-3 p-2">
        <div className="row  d-flex justify-content-between">
                  <div className="col-12 col-sm-12 col-md-6 d-flex d-flex justify-content-between align-items-center  my-3">
                    <h4 className="align-items-center"><i class="fa-solid fa-envelope-open me-2"></i>Sign Up For Newsletter</h4>
                    <p className=" align-items-center mt-3">...and receive $20 coupon on next shopping</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-end">
                  <div className="input-group ">
                          <input type="search" className="form-control input" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                          <button className=" button" type="button" id="button-addon2">Subscribe</button>
                        </div>                  
                        </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Section10