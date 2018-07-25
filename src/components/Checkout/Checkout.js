import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { addToCart } from '../../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './Checkout.css';

class Checkout extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      address: '',
      city: '',
      usState: '',
      zip: null,
      phone: null,
      cart: [],
      total: 0
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleCoChange = this.handleCoChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateSelector = this.handleStateSelector.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

  }

  handleEmailChange(e){
    this.setState({email: e.target.value})
  }

  handleFirstNameChange(e){
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange(e){
    this.setState({lastName: e.target.value})
  }

  handleCoChange(e){
    this.setState({company: e.target.value})
  }

  handleAddressChange(e){
    this.setState({address: e.target.value})
  }

  handleCityChange(e){
    this.setState({city: e.target.value})
  }

  handleStateSelector(e){
    this.setState({email: e.target.value})
  }

  handleZipChange(e){
    this.setState({zip: e.target.value})
  }

  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }

  handleOrderBtnClick(userID){
    // axios.put('/api/user/updateUser', userID).then()
  }

  render(){
    let checkoutItems = this.props.cart.map((item, i) => {
      return(
        <div className='sb-checkout-item'>
          <img src={item.image} className='sb-checkout-image' alt={item.name}/>
          <p id='sb-item-name'>{item.name}</p>
          <p id='sb-item-price'>{item.price}</p>
        </div>
      )
    })
    return(
      <div className='Checkout'>
        <div className='contact-main-container'>
          <div className='contact-main-hdr'>
            <h2>TinyCircuits</h2>
          </div>
          <div className='contact-main-paypal'>

          </div>
          <div className='contact-main-email'>
            <p>Contact information</p>
            <input onChange={this.handleEmailChange} 
                   className="input-field-full"
                   type="text" 
                   placeholder='Email'/>
          </div>
          <div className='contact-main-input-wpr'>
            <p>Shipping Address</p>
            <div className='contact-main-inputs'>
              <input onChange={this.handleFirstNameChange} 
                     className="input-field-half"
                     type="text" 
                     placeholder='First Name'/>
              <input onChange={this.handleLastNameChange} 
                     className="input-field-half"
                     type="text" 
                     placeholder='Last Name'/>
              <input onChange={this.handleCoChange} 
                     className="input-field-full"
                     type="text" 
                     placeholder='Company'/>
              <input onChange={this.handleAddressChange} 
                     className="input-field-full"
                     type="text" 
                     placeholder='Address'/>
              <input onChange={this.handleCityChange} 
                     className="input-field-full"
                     type="text" 
                     placeholder='City'/>
              <select onChange={(e) => this.handleStateSelector(e.target.value)}
                      className="input-field-half"
                      name="" 
                      id=""
                      value={this.state.usState}>
                <option value="">State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">District Of Columbia</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
                      </select>
              <input onChange={this.handleZipChange} 
                     className="input-field-half"
                     type="text" 
                     placeholder='Zip'/>
              <input onChange={this.handlePhoneChange} 
                     className="input-field-full"
                     type="text" 
                     placeholder='Phone'/>
            </div>
            <div className='contact-main-order'>
              <Link to='/Cart'>
                 <p>  Return to cart </p>
              </Link>
              <button onClick={this.handleOrderBtnClick}>Complete Order</button>
            </div>
          </div>
          <div className='contact-main-footer'>
            <Link to='/'>
              <p>Refund policy</p>
            </Link>
            <Link to='/'>
              <p>Privacy policy</p>
            </Link>
            <Link to='/'>
              <p>Terms of service</p>
            </Link>
          </div>
        </div>
        <div className='contact-sidebar-container'>
          <div className='sb-cart-list'>
            {checkoutItems}
          </div>
          <div className='sb-total'>
            <div className='subtotal'>
              <p>Subtotal</p>
              <p>$</p>
            </div>
            <div className='shipping'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className='total'>
              <h4>Total</h4>
              <h3>USD</h3>
              <h2>$</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout);