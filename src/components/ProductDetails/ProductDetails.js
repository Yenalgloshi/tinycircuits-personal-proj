import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import axios from 'axios';
import './ProductDetails.css';

class ProductDetails extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      partNum: '',
      price: 0,
      numInStock: 0,
      color: '',
      qty: 1,

    }    
  }

  handleSortSelector(){

  }

  handlePageNumClick(){

  }

  render(){
    return(
      <div className='details'>
        <Header/>
        <div className='details-body'>
          <div className='details-breadcrumb'>
            
          </div>
          <div className='details-img-wpr'>
            <div className='details-img-main'>
              picture
            </div>
            <div className='details-img-selector'>

            </div>
          </div>
          <div className='details-info'>
            <h2>{this.state.name}</h2>
            <p>{this.state.partNum}</p>
            <h1>{this.state.price}</h1>
            <p>{this.state.numInStock}</p>
            <input value={this.state.qty} type="number" name="quantity" min="1" max="5"/>
            <button onClick={ this.handleAddToCart } 
                      className="details-btn-login">ADD TO CART</button>
            <ul>
              <li>Free Shipping for orders over $50</li>
              <li>Available Worldwide</li>
            </ul>

          </div>
          <div className='details-description'>

          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default ProductDetails;