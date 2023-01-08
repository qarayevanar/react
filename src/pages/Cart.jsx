import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const{
    isEmpty,    
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();
  const notify = () => toast.error('Product deleted!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  if (isEmpty) return <div className='d-flex justify-content-center'><img  src="https://parcamkapinda.com/img/cart.gif" alt=""  /></div>
  return (
    <div className='container'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Summary</th>
      <th scope="col ">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fd,i)=>(
          <tr>
          <th scope="row">{fd.id}</th>
          <td><img src={fd.image} width="50" alt="" /></td>
          <td>{fd.title}</td>
          <td>{fd.category}</td>
          <td>{fd.price}$</td>
          <td >{(fd.price *fd.quantity).toFixed(2)}</td>
          <td >
            
          <button className='btn btn-primary'
              onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}
            >
              +
            </button>
          <span className='mx-2'>{fd.quantity} x {fd.name} </span>
          <button className='btn btn-primary'
              onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}
            >
              -
            </button>
          </td>
          <td><button className='btn btn-danger' onClick={()=>{notify(removeItem(fd.id))}}>&times;</button>
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
          </td>
        </tr>
    ))}

  </tbody>
</table>
  <h4 className='text-end'>Total Price: {cartTotal.toFixed(2)}$</h4>
  <div className='d-flex justify-content-end py-2'>
  <button onClick={emptyCart} className="btn btn-outline-danger ">Clear all</button>
  </div>
    </div>
  )
}

export default Cart