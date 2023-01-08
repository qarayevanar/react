import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WishlistDetails = () => {
  const {url} = useParams();
  const [productWish,setproductWish]=useState([]);
  const detailsWishlist = productWish.find(n=>n.id == url);
  const { addItem } = useCart();
  const notify = () => toast.success('Product added to ❤️ ', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  useEffect(()=>{
    const fetchData=async()=>{
      const comingApi = await axios.get('https://fakestoreapi.com/products')
      setproductWish(comingApi.data)
    }
    fetchData();
  })

  return (
    <>
      {detailsWishlist === undefined ? <h1 className='my-5'>Loading...</h1>: 
       (<div className="container col-xxl-8 px-4 py-5">
       <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
         <div className="col-10 col-sm-8 col-lg-6">
           <img src={detailsWishlist.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={500} loading="lazy" />
         </div>
         <div className="col-lg-6">
           <h1 className="display-5 fw-bold lh-1 mb-3">{detailsWishlist.title}</h1>
           <p className="lead">{detailsWishlist.description}</p>
           <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button onClick={()=>{notify(addItem(detailsWishlist))}} type="button" className="btn btn-danger btn-lg px-4 me-md-2">Add to wishlist</button>
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
     )
      }

     
    </>
  )
}

export default WishlistDetails