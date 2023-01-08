import React,{Component} from "react";

import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog4 from '../img/blog4.jpg';
import blog5 from '../img/blog5.jpg'

class Section4 extends Component {

  render(){
    return (
       <div className="container ">
        <div className="row my-5 g-5">
          <div className="col-12">
            <h3 className="text-start h3">Latest Blog</h3>
          </div>
        </div>
          <div className="row g-5">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '20rem'}}>
              <img src={blog1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="">Sed posuere arcu vel dolor elementum</h6>
                <p className="">Fusce efficitur ullamcorper tempus. Nam vitae finibus urna. In hac habitasse platea dictumst. Do</p>
                <p><i class="fa-regular fa-user me-2"></i>Petter <span className="mx-2">|</span><i class="fa-regular fa-calendar me-2"></i>26th Feb 2021</p>
              </div>
            </div>

          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '20rem'}}>
              <img src={blog2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="">Sed posuere arcu vel dolor elementum</h6>
                <p className="">Fusce efficitur ullamcorper tempus. Nam vitae finibus urna. In hac habitasse platea dictumst. Do</p>
                <p><i class="fa-regular fa-user me-2"></i>Petter <span className="mx-2">|</span><i class="fa-regular fa-calendar me-2"></i>26th Feb 2021</p>
              </div>
            </div>

          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '20rem'}}>
              <img src={blog4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="">Sed posuere arcu vel dolor elementum</h6>
                <p className="">Fusce efficitur ullamcorper tempus. Nam vitae finibus urna. In hac habitasse platea dictumst. Do</p>
                <p><i class="fa-regular fa-user me-2"></i>Admin <span className="mx-2">|</span><i class="fa-regular fa-calendar me-2"></i>26th Feb 2021</p>
              </div>
            </div>

          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0" style={{width: '20rem'}}>
              <img src={blog5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="">Sed posuere arcu vel dolor elementum</h6>
                <p className="">Fusce efficitur ullamcorper tempus. Nam vitae finibus urna. In hac habitasse platea dictumst. Do</p>
                <p><i class="fa-regular fa-user me-2"></i>Mical <span className="mx-2">|</span><i class="fa-regular fa-calendar me-2"></i>26th Feb 2021</p>
              </div>
            </div>

          </div>

          </div>
       </div>
    )
  }
}

export default Section4