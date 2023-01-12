import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../data/productData";

const Category = () => {
  const [query, setQuery] = useState("");

  
  return (
    <div className="container mt-5 ">
      <Link className="btn btn-secondary mb-3" to="/filter">category filter</Link>
      <div className="row ">
      <div className="col-6">
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      </div>
      <div className="row  g-5">
          {product.filter(u=>u.title.toLocaleLowerCase().includes(query)).map((fd, i) => (
            <div className="col-12 col-sm-6 col-md-3">
                        <div key={i} className="card" style={{width: '18rem'}}>
                        <img src={fd.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{fd.title}</h5>
                          <p className="card-text">{fd.price}$</p>
                        </div>
                      </div>
                      </div>
          ))}
      
      </div>
    </div>
  );
};

export default Category;