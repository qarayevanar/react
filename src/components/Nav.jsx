import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning py-3">
              <div className="container">
                <a className="navbar-brand bg-dark text-white px-5" href="."><i class="fa-solid fa-bars-staggered me-2"></i>SHOP BY CATEGORIES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-3 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="about">Return & Policy</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="about">Terms & Conditions</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="about">Shipping & Returns</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="contact">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="filter">Filter</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold"  to="category">Category</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

    )
  }
}

export default Nav