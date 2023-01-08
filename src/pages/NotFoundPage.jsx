import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NotFoundPage extends Component {
  render() {
    return (
      <Link to="/">
        <div className='container' style={{
          width:"100%",
          height:"80vh",
          backgroundImage:
          "url('https://i.pinimg.com/originals/0b/21/9f/0b219f91b508342ff91c997e16afeca4.gif')",
          backgroundSize:"cover",
        }}
          ></div>
      </Link>
    )
  }
}

export default NotFoundPage;