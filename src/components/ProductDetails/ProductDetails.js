import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import {Link} from 'react-router-dom';
// import { addToCart } from '../../redux/reducer';
import { connect } from 'react-redux';
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
      cartQty: 1,
      imgs: []
    }    
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);

  }
  
  componentDidMount(){
    axios.get(`/api/productDetails/${this.props.match.params.itemId}`).then( res => {
      // console.log('prod details imgs',res.data.imgsArr)
      this.setState({ name: res.data.name,
        partNum: res.data.part_num,
        price: res.data.price,
        numInStock: res.data.stock_qty,
        description: res.data.description,
        picture: res.data.image,
        imgs: res.data.imgsArr})
      })
    }
    
    handleSortSelector(){
      
    }
    
    handlePageNumClick(){
      
    }

    handleAddToCart(){
      // this.props.addToCart(this.state)
      let itemID = this.props.match.params.itemId;
      let qty = this.state.cartQty;
      axios.post('/api/cart/add', {itemID, qty}).then(res => {
      
     })
    }

    handleQtyChange(e){
      this.setState({cartQty: e.target.value})
    }

    
    render(){
      let additionalImgs = this.state.imgs.map((pic, i) => {
        console.log('other pics', pic)
        return (
          <img src={pic} className='details-additional-img' alt=""/>
        )
      })
      
      return(
        <div className='details'>
        <Header/>
        <div className='details-body'>
          <div className='details-breadcrumb'>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <p> / </p>
              <Link to="/Shop">
                <li>All Products</li>
              </Link>
              <p> / </p>
              <li>{this.state.name}</li>
            </ul>
            
          </div>
          <div className='details-img-wpr'>
            <div className='details-img-main'>
              <img src={this.state.picture} width='800px' alt={this.state.name}/>
            </div>
            <div className='details-img-selector'>
              {additionalImgs}
            </div>
          </div>
          <div className='details-info'>
            <h2>{this.state.name}</h2>
            <p>{this.state.partNum}</p>
            <h1>$ {this.state.price}</h1>
            <p>{this.state.numInStock} in stock</p>
            <p>Qty</p>
            <input id='details-qty-input' 
                   type="number" 
                   value= {this.state.cartQty} 
                   name="quantity" 
                   min="1" 
                   max="50"
                   onChange={this.handleQtyChange}/>
            <button onClick={ this.handleAddToCart } 
                      className="blue-btn">ADD TO CART</button>
            <p>{this.state.description}</p>
            <ul style={{listStyleType: 'disc', listStylePosition: 'inside'}} >
              <hr/>
              <li>Free Shipping for orders over $50</li>
              <li>Available Worldwide</li>
              <hr/>
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