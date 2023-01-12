import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';

import myphoto from '../img/logo_1.webp';

 const Header=()=>{
  const { totalItems } = useCart();
  
    return (
            <nav className="navbar navbar-expand-lg bg-white py-4">
              <div className="container">
                <Link to="."><img  src={myphoto} width='200' alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <div className="d-flex border p-1">
                          <input type="search" className="form-control hed-inp" placeholder="Search products" aria-label="Recipient's username" aria-describedby="button-addon2" />
                          <button className=" hed-btn" type="button" id="button-addon2">Search</button>
                        </div>
                      </li>
                  </ul>
                  <div className="d-flex" role="search">
                    <Link to="cart" className='cart-btn me-3'><i class="fa-solid fa-cart-shopping "></i>({totalItems})</Link>
                    <Link to="Login" className="log-btn" type="submit"><i class="fa-regular fa-user"></i></Link>
                  </div>
                </div>
              </div>
            </nav>

    )
}

export default Header