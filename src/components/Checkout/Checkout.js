import React, { Component } from 'react';
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
      state: '',
      zip: null,
      phone: null,
      cart: [],
      total: 0
    }
  }

  render(){
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
            <input onChange={this.handleEmailChange} type="text" placeholder='Email'/>
          </div>
          <div className='contact-main-input-wpr'>
            <p>Shipping Address</p>
            <div className='contact-main-inputs'>
              <input onChange={this.handleFirstNameChange} type="text" placeholder='First Name'/>
              <input onChange={this.handleLastNameChange} type="text" placeholder='Last Name'/>
              <input onChange={this.handleCoChange} type="text" placeholder='Company'/>
              <input onChange={this.handleAddressChange} type="text" placeholder='Address'/>
              <input onChange={this.handleCityChange} type="text" placeholder='City'/>
              <select onChange={(e) => this.handleStateSelector(e.target.value)}
                      name="" 
                      id=""
                      value={this.state.state}>
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
              <input onChange={this.handlePhoneChange} type="text" placeholder='Phone'/>
            </div>
          </div>
          <div className='contact-main-footer'>

          </div>
        </div>
        <div className='contact-sidebar-container'>
          <div className='sb-cart-list'>

          </div>
          <div className='sb-total'>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout;