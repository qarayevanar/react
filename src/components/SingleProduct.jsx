import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class SingleProduct extends Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card" >
          <img src={this.props.photo} height={300} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title.substring(0,25)}...</h5>
            <p className="card-text">{this.props.desc.substring(0,25)}...</p>
            <p className="card-text">{this.props.price}$</p>
            <Link to={`/products/${this.props.id}`} className="btn btn-primary me-3">Read more</Link>
            <Link to={`/wishlistdetails/${this.props.id}`} className="btn btn-danger me-3">wishlist</Link>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProduct