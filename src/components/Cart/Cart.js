import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { addToCart, setToCart } from '../../redux/reducer';
import { connect } from 'react-redux';
import './Cart.css';

class Cart extends Component {
  constructor(){
    super()

    this.state={
      cartItems: [],
      subtotal: 0
    }
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

  render(){
    let itemsInCart = this.state.cartItems.map((item, i) => {
      return(
          <div className='cart-items-list-wpr'>
            <img src={item.image} className='cart-item-img' alt={item.name}/>
            <div className='cart-item-details'>
              <p>{item.name}</p>
              <p>$ {item.price} USD</p>
              <p>Quantity</p>
              <input type="number" value={item.quantity}/>
              <p>Remove</p>
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
            <Link to={'/checkout'}>
              <button>CHECKOUT</button>
            </Link>
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

const actions = { addToCart, setToCart }

export default connect(mapStateToProps, actions)(Cart);