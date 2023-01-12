import { useState } from "react";
import productlist from "../data/productData"

const Category = () => {
  const [data,setData] = useState(productlist);


  const filterResult = (catItem) =>{
    const result = productlist.filter((fdata)=>{
      return fdata.category === catItem;
    });
    setData(result);
  }
  
  return (
    <div>
        <div className="container my-5">
          <div className=" my-3">
          <button className="me-2 btn btn-success"  onClick={()=>{filterResult('phone&accessory')}}>Phone & Accessory</button>
          <button className="me-2 btn btn-success"   onClick={()=>{filterResult('laptop')}}>Laptop</button>
          <button className=" btn btn-success"  onClick={()=>{filterResult('tablet')}}>Tablet</button>
          </div>
          <div className="row g-5">
            {data.map((values)=>{
            const{title,price,image,id}= values;
            return (
                <div className="col-12 col-sm-6 col-md-3">
                                <div key={id} className="card" style={{width: '18rem'}}>
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}$</p>
              </div>
            </div>
                </div>
           )})}
          </div>
        </div>
    </div>
  )
}


export default Category;