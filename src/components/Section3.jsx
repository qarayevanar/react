import React,{Component} from "react";
import Card from 'react-bootstrap/Card';
import category5 from '../img/category-05.jpg';
import category1 from '../img/category-01.jpg';
import category3 from '../img/category-03.jpg';
import category4 from '../img/category-04.jpg'





class Section3 extends Component {

  render(){
    return (
      <div className="container-fluid bg-light p-5">
       <div className="container ">
        <div className="row my-3">
          <h3 className="text-start">
          Shop Categories
          </h3>
        </div>
          <div className="row ">
          <div className="col-12 col-sm-6 col-md-3">
          <Card >
            <Card.Img variant="top" src={category5} />
            <Card.Body>
              <Card.Title className="fs-5">Shop All</Card.Title>
              <Card.Text>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Best Discount</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Coffee and Milk Mugs</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Electric Water Heaters</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>View All</p>

              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
          <Card >
            <Card.Img variant="top" src={category1} />
            <Card.Body>
              <Card.Title className="fs-5">Smart Watches</Card.Title>
              <Card.Text>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Kitchen</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Publications</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Utility</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>5% to 15% off</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>View All</p>

              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
          <Card >
            <Card.Img variant="top" src={category3} />
            <Card.Body>
              <Card.Title className="fs-5">Smart Android TV</Card.Title>
              <Card.Text>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Tablet Air</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Television & Video</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Video Game Consoles</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Wearable Technology</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>View All</p>

              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
          <Card >
            <Card.Img variant="top" src={category4} />
            <Card.Body>
              <Card.Title className="fs-5">Headphones & Earphones</Card.Title>
              <Card.Text>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Video Projectors</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>Laptop Accessories</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>GPS & Navigation</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>eBook Readers & Accessories</p>
                <p><i class="fa-solid fa-chevron-right me-2 fs-6"></i>View All</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

          </div>
       </div>
       </div>
    )
  }
}

export default Section3