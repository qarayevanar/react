import React,{Component} from "react";
import img01 from '../img/cms-img-01.jpg';
import img02 from '../img/cms-img-02.jpg';
import img03 from '../img/cms-img-03.jpg';
import img04 from '../img/cms-img-04.jpg';


class Section2 extends Component {
  render(){
    return(
        <div className="container my-5">
          <div className="row g-5 d-flex justify-content-between sec2-main">
            <div className="col-12 col-sm-6 col-md-3 sec2-div">
              <ul >
                <li className="d-flex justify-content-around align-items-center ">
                  <div className="d-flex justify-content-center">
                  <img src={img01} alt="" />
                  </div>
                  <div className="border-start px-2">
                    <p className="text-danger">BIG RANGE OF</p>
                    <p className="fw-bold">Stoneware Bowl</p>
                    <p>Up To 30% OFF</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 sec2-div">
            <ul >
                <li className="d-flex justify-content-around align-items-center ">
                  <div className="d-flex justify-content-center">
                  <img src={img02} alt="" />
                  </div>
                  <div className="border-start px-2">
                    <p className="text-danger">BIG RANGE OF</p>
                    <p className="fw-bold">Ice-cream Maker</p>
                    <p>Up To 25% OFF</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 sec2-div">
            <ul >
                <li className="d-flex justify-content-around align-items-center ">
                  <div className="d-flex justify-content-center">
                  <img src={img03} alt="" />
                  </div>
                  <div className="border-start px-2">
                    <p className="text-danger">BIG RANGE OF</p>
                    <p className="fw-bold">Tv </p>
                    <p>Up To 15% OFF</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 sec2-div">
            <ul >
                <li className="d-flex justify-content-around align-items-center ">
                  <div className="d-flex justify-content-center">
                  <img src={img04} alt="" />
                  </div>
                  <div className="border-start px-2">
                    <p className="text-danger">BIG RANGE OF</p>
                    <p className="fw-bold">Headphone</p>
                    <p>Up To 25% OFF</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Section2 