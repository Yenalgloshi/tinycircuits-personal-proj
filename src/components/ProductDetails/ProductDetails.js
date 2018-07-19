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
      description: '',
      picture: '',
    }    
  }
  
  componentDidMount(){
    axios.get(`/api/productDetails/${this.props.match.params.itemId}`).then( res => {
      this.setState({ name: res.data[0].name,
        partNum: res.data[0].part_num,
        price: res.data[0].price,
        numInStock: res.data[0].stock_qty,
        description: res.data[0].description,
        picture: res.data[0].image})
      })
      console.log('url item id', this.props.match.params.itemId);
      
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
              <img src={this.state.picture} width='800px' alt={this.state.name}/>
            </div>
            <div className='details-img-selector'>

            </div>
          </div>
          <div className='details-info'>
            <h2>{this.state.name}</h2>
            <p>{this.state.partNum}</p>
            <h1>$ {this.state.price}</h1>
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