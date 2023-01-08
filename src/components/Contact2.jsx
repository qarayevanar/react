import React, { Component } from 'react';

export class Contact2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 colsm-12 col-md-6">
            <h3>Do You Have <br /> Some Questions?</h3>
            <p>We are at your disposal 7 days a week!</p>
            <hr />
            <div className='d-flex  align-items-center mb-3'>
            <i class="fa-solid fa-location-dot fs-3 me-4 mb-3 text-warning"></i>
            <p>50-UTC, Beside Orange Hospital, <br /> Undera Samaon , Flox.</p>
            </div>
            <div className='d-flex  align-items-center'>
            <i class="fa-regular fa-clock fs-3 me-4 mb-3 text-warning"></i>            
            <p>Open Time <br /> 10:00AM – 6:00PM, Sunday Close</p>
            </div><hr />
            <div className='d-flex align-items-center mt-4'>
              <div className='me-5'>
              <i class="fa-solid fa-phone-volume fs-1 text-warning"></i>
              </div>
              <div>
                <h6>Got Question</h6>
                <h1 className='mb-3'>(+01) 850-315-918</h1>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 colsm-12 col-md-6">
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column mb-2'>
                <label className='mb-2' htmlFor="user">Your name</label>
                <input type="text" className='contact-inp' />
              </div>
              <div className='d-flex flex-column mb-2'>
                <label className='mb-2' htmlFor="user">Your email</label>
                <input type="email" className='contact-inp'/>
              </div>
            </div>
            <div className='d-flex flex-column mb-2'>
                <label className='mb-2' htmlFor="subject">Subject</label>
                <input type="text" className='contact-sub' />
              </div>
              <div className='d-flex flex-column '>
                <label className='mb-2 ' htmlFor="message">Your Message (Optional)</label>
                <textarea className='contact-text' name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className='d-flex '>
              <button className='my-5 mx-auto contact-btn' type='button'>Submit Now</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact2