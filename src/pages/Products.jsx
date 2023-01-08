import React, { Component } from 'react'
import axios from 'axios'
import SingleProduct from '../components/SingleProduct'
import Product from '../components/Product'


export class Products extends Component {
  constructor () {
    super()
    this.state={
      productData:[]
    }
  }

  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
    .then(res=>this.setState({productData:res.data}));

  }
  render() {
    return (
        <>
        <Product />
        <div className="container">
          <div className='row g-5 my-5'>
            {this.state.productData.map((fd,i)=>{
              return <SingleProduct  data={fd} title={fd.title} id={fd.id} key={i}  desc={fd.description} photo={fd.image} price={fd.price}/>
            })}
          </div>
        </div>
        </>
    )
  }
}

export default Products