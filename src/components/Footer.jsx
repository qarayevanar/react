import React,{Component} from "react";
import fimg from '../img/pay.png'

class Footer extends Component {
   render(){
    return (

      <div className="container py-3">
        
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Info</h6>
            <div className="d-flex justify-content-between ">
                <div className="me-3">
                <i class="fa-solid fa-location-dot text-warning"></i>
                  </div>
                <div className="mb-2">
                  <h6> Horse Carrefour 1487 Rocky  Horse Arlington,  TX 16819 United</h6>
                </div>
            </div>
            <div className="d-flex  ">
                <div className="me-3">
                <i class="fa-solid fa-phone text-warning"></i>
                  </div>
                <div>
                  <h6>(00)1234 567891</h6>
                </div>
            </div>
            <div className="d-flex  ">
                <div className="me-3">
                <i class="fa-regular fa-envelope text-warning"></i>
                  </div>
                <div>
                  <h6>support@yourstore.com</h6>
                </div>
            </div>
            
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3  text-center">
            <h5 className="">Navigate</h5>
            <h6 className="fp">About Us</h6>
            <h6 className="fp">Store Location</h6>
            <h6 className="fp">Contact Us</h6>
            <h6 className="fp">Shippping & Delivery</h6>
            <h6 className="fp">Latest News</h6>
            <h6 className="fp">Our Sitemap</h6>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 text-center">
          <h4 className="">Our Service</h4>
            <p className="fp">Privacy Policy</p>
            <p className="fp">Terms of Sale</p>
            <p className="fp">Customer Service</p>
            <p className="fp">Delivery Information</p>
            <p className="fp">Payments</p>
            <p className="fp">Saved Cards</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 text-center">
          <h4 className="fw-bold">My Account</h4>
            <p className="fp">My Account</p>
            <p className="fp">My Shop</p>
            <p className="fp">My Cart</p>
            <p className="fp">Checkout</p>
            <p className="fp">My Wishlist</p>
            <p className="fp">Tracking Order</p>
          </div>
        </div>

        <div className="row bg-light py-2">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
            <div className="icon me-3">
            <i class="fa-solid fa-plane-up fs-3"></i>
            </div>
            <p className="mt-3">Get free delivery <span>On Worldwide</span></p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
            <div className="icon me-3">
            <i class="fa-solid fa-tag fs-3"></i>
            </div>
            <p className="mt-3">Save 15% When You <span>use credit</span></p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
            <div className="icon me-3">
            <i class="fa-solid fa-headphones fs-3"></i>
            </div>
            <p className="mt-3">Best Support <span>24/7 free support</span></p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
            <div className="icon me-3">
            <i class="fa-solid fa-dollar-sign fs-3"></i>
            </div>
            <p className="mt-3">Big Saving<span>at lowest price</span></p>
            </div>
          </div>
        </div>
          <hr />
        <div className="row my-1 ">
          <div className="col-12 col-sm-6 ">
            <p className=" align-items-center mt-2">© 2022 presslayouts.com. All Rights Reserved.</p>
          </div>
          <div className="col-12 col-sm-6  d-flex justify-content-end  align-items-center">
              <img src={fimg} alt="" />
          </div>
        </div>
      </div>
    )
   }
}

export default Footer