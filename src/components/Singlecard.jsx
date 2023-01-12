import React from 'react';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productData from '../data/productData';
import { Link } from 'react-router-dom';

const Singlecard =()=>{
  const { addItem } = useCart();
  const notify = () => toast.success('Product  added!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  return (

    <div className="container single py-5">
    <div  className='row '>
      {productData.map((item,i)=>
                   <div className="col-12 col-sm-6 col-md-2 " >
                   <div className="card1">
                     <img src={item.image} alt=""  className='sback'/>
                     <img src={item.photo}  alt="" className='sfront'/>
                   </div>
                   <div className="c1-text">
                       <i class="fa-regular fa-star text-warning"></i>
                       <i class="fa-regular fa-star text-warning"></i>
                       <i class="fa-regular fa-star text-warning"></i>
                       <i class="fa-regular fa-star text-warning"></i>
                       <i class="fa-regular fa-star text-warning"></i>
                       <h4>{item.title}</h4>
                       <h6 className="mb-3">${item.price}</h6>
                       <button onClick={()=>{notify(addItem(item))}} type="button"  className="c1-btn me-3">+ Add to card</button> 
                       <Link to={`/productsdetails`}   className="c1-btn"><i class="fa-solid fa-eye"></i></Link>
                       <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                   </div>
                 </div>
        )}
    </div>
    </div>
  )
}

export default Singlecard

