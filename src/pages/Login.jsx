import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  email:'anar@mail.az',
  pass:'anar123'
}



const Login = ()=>{
  const [email,setEmail] = useState();
  const [password,setPass] = useState();
  const navigate = useNavigate()


  const formSubmit = (e)=> {
          e.preventDefault();
          if (!email || !password){
            alert('Please,fill  input')
          }else {
              if (email === user.email && password === user.pass){
                navigate('/products')
              }else {
                alert('Email or password is wrong!')
              }
          }
  }

  return (
    <>
    <div className="container-fluid bg-light ">
      <div className="container mb-5 py-5">
        <div className="row">
          <div className="col-12">
          <h1 className="text-center">Login</h1>
          </div>
        </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5  ">
              <div className="d-flex align-items-center  flex-column my-5">
                <form onSubmit={formSubmit} className="">
                  <div className="mb-3">
                      <label  className="form-label">Email address</label>
                      <input onChange={(e)=>{setEmail(e.target.value)}}   type="email" className="form-control inplog"  />
                  </div>
                  <div className="mb-3">
                      <label  className="form-label">Password</label>
                      <input onChange={(e)=>{setPass(e.target.value)}}  type="password" className="form-control" />
                  </div>
                  <button type="submit" className="logbtn ">Login</button>
                </form>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7">
            <div className='d-flex justify-content-between mt-5'>
              <div className='d-flex flex-column my-2'>
                <label className='mb-2' htmlFor="user">First name <sup className='text-danger fs-6'>*</sup></label>
                <input type="text" className='contact-inp' placeholder='Anar'/>
              </div>
              <div className='d-flex flex-column my-2'>
                <label className='mb-2' htmlFor="user">Last name<sup className='text-danger fs-6'>*</sup></label>
                <input type="email" className='contact-inp' placeholder='Qarayev'/>
              </div>
            </div>
            <div className='d-flex flex-column my-2'>
                <label className='mb-2' htmlFor="subject">Email<sup className='text-danger fs-6'>*</sup></label>
                <input type="email" className='login-inp 'placeholder='example@mail.com'/>
              </div>
              <div className='d-flex flex-column my-2'>
              <label className='mb-2' htmlFor="subject">Telephone<sup className='text-danger fs-6'>*</sup></label>
                <input type="tel" className='login-inp 'placeholder='+944(55)700-00-00'/>
              </div>
              <div className='d-flex flex-column my-2'>
                <label className='mb-2' htmlFor="subject">Password<sup className='text-danger fs-6'>*</sup></label>
                  <input type="password" className='login-inp '/>
              </div>
              <div className='d-flex flex-column my-2'>
                <label className='mb-2' htmlFor="subject">Password Confirm<sup className='text-danger fs-6'>*</sup></label>
                  <input type="password" className='login-inp '/>
              </div>
              <div className='d-flex justify-content-end mt-5'>
                <input type="checkbox"  className='me-2'/>
                <p className='mt-3 me-2'>I have read and agree to the Privacy Policy</p>
              <button className=' mx-end contact-btn mt-2' type='button'>Submit Now</button>
              </div>
            </div>
          </div>
      </div>  
    </div>

    </>
  )
}

export default Login