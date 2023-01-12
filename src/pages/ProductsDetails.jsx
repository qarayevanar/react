import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductsDetails = () => {
  const { addItem } = useCart();
  
  const{    
    items,
  } = useCart();
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
    <div className='container'>
    {items.map((item,i)=>(
      <div className="container col-xxl-8 px-4 py-5">
       <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
         <div className="col-10 col-sm-8 col-lg-6">
           <img src={item.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={300} height={300} loading="lazy" />
         </div>
         <div className="col-lg-6">
           <h1 className="display-5 fw-bold lh-1 mb-3">{item.title}</h1>
           <p className="lead">{item.desc}</p>
           <div className="d-grid gap-2 d-md-flex justify-content-md-start">
             <button onClick={()=>{notify(addItem(item))}} type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to card</button>
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
       </div>
     </div>
    ))}
    </div>
  )
}

export default ProductsDetails




















// import { useCart } from 'react-use-cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import productData from '../data/productData';


// const ProductDetails = () => {
//   const { addItem } = useCart();
//   const notify = () => toast.success('Product  added!', {
//     position: "bottom-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     });



//   return (
//     <>
//     {productData.map((item,i)=>
//         <div className="container col-xxl-8 px-4 py-5">
//        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//          <div className="col-10 col-sm-8 col-lg-6">
//            <img src={item.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={500} loading="lazy" />
//          </div>
//          <div className="col-lg-6">
//            <h1 className="display-5 fw-bold lh-1 mb-3">{item.title}</h1>
//            <p className="lead">{item.description}</p>
//            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//              <button onClick={()=>{notify(addItem(item))}} type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to card</button>
//              <ToastContainer
// position="bottom-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="light"
// />
//            </div>
//          </div>
//        </div>
//      </div>
//              )}
//     </>
//   )
// }

// export default ProductDetails