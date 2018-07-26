import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { addToCart, setToCart, setUser, delFromCart } from '../../redux/reducer';
import { connect } from 'react-redux';
import './Cart.css';

class Cart extends Component {
  constructor(){
    super()

    this.state={
      cartItems: [],
      subtotal: 0, 
      email: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCheckoutBtnClick = this.handleCheckoutBtnClick.bind(this);
    this.handleRemoveBtnClick = this.handleRemoveBtnClick.bind(this);
  }

  componentDidMount(){
    axios.get('/api/cart/get').then( res => {
      this.setState({cartItems: res.data})
      this.props.setToCart(res.data)
    })
}

  handleCheckoutBtnClick(){

  }

  handleQtySelector(){

  }

  handleEmailChange(e){
    this.setState({email: e.target.value})
  }

  handleCheckoutBtnClick(){
    axios.post('/api/user/info', {email: this.state.email})
    .then(res => {
      this.props.setUser(res.data)
      this.props.history.push('/Checkout')
    })
  }

  handleRemoveBtnClick(itemID){
    axios.delete(`/api/cart/delete${itemID}`).then(res => {
      this.props.delFromCart(res.data)
    })
    
  }

  render(){
    let itemsInCart = this.props.cart.map((item, i) => {
      console.log('items in cart', item)
      return(
          <div className='cart-items-list-wpr'>
            <img src={item.image} className='cart-item-img' alt={item.name}/>
            <div className='cart-item-details'>
              <p>{item.name}</p>
              <p>$ {item.price} USD</p>
              <p>Quantity</p>
              <input type="number" value={item.quantity}/>
              <button onClick={() => this.handleRemoveBtnClick(item.id)} className='cart-item-remove-btn'>Remove</button>
            </div>
          </div>
      )
    })


    return(
      <div className='Cart'>
      <Header/>
        <div className='cart-subHdr'>
            <h2>SHOPPING CART</h2>
            <p>Continue Shopping</p>
        </div>
        <div className='cart-content-wpr'>
          <div className='cart-items-list-container'>
            <h3>PRODUCTS</h3>
            <hr/>
            {itemsInCart}
          </div>
          <div className='cart-subtotal-container'>
            <h3>SUBTOTAL</h3>
            <hr/>
            <h4>$ 100.00 USD</h4>
            <p>Excluding tax & shipping</p>
            <input onChange={this.handleEmailChange} 
                   className="cart-email-input"
                   type="text" 
                   placeholder='Enter Email to Checkout'/>
            
              <button onClick={this.handleCheckoutBtnClick}>CHECKOUT</button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart
  }
}

const actions = { addToCart, setToCart, setUser, delFromCart }

export default connect(mapStateToProps, actions)(Cart);